document.addEventListener("DOMContentLoaded", function () {
  // === DOM Elements ===
  const modal = document.getElementById("event-modal");
  const modalTitle = document.getElementById("modal-title");
  const closeModalButton = modal.querySelector(".close-button");
  const eventForm = document.getElementById("event-form");
  const eventDateInput = document.getElementById("event-date");
  const eventIndexInput = document.getElementById("event-index");
  const eventTitleInput = document.getElementById("event-title");
  const eventTimeInput = document.getElementById("event-time");
  const eventCategorySelect = document.getElementById("event-category"); // Modal category select
  const eventDescriptionInput = document.getElementById("event-description");
  const eventColorInput = document.getElementById("event-color"); // NEW Color input
  const eventIconInput = document.getElementById("event-icon"); // NEW Icon input
  const saveEventButton = document.getElementById("save-event-button"); // Get save button
  const addEventButton = document.getElementById("add-event-button");
  // NEW Category Management Elements
  const newCategoryInput = document.getElementById("new-category-input");
  const addCategoryButton = document.getElementById("add-category-button");
  const selectedDateDisplay = document.getElementById("selected-date-display");
  const monthYearDisplay = document.getElementById("month-year-display");
  const jumpToDateSection = document.getElementById("jump-to-date");
  const jumpMonthSelect = document.getElementById("jump-month");
  const jumpYearInput = document.getElementById("jump-year");
  const jumpButton = document.getElementById("jump-button");
  const calendarHeader = document.querySelector(".calendar-header");
  const daysGridElement = document.getElementById("days-grid");
  const themeToggle = document.getElementById("theme-checkbox");
  const animationToggle = document.getElementById("animation-checkbox"); // Animation toggle
  const settingsToggleButton = document.getElementById(
    "settings-toggle-button"
  ); // Settings button
  const settingsSection = document.getElementById("settings-section"); // Settings area
  const body = document.body;

  // Events List Elements
  const eventsListTitle = document.getElementById("events-list-title");
  const eventsListUl = document.getElementById("events-list");
  const eventSearchInput = document.getElementById("event-search"); // Search input
  const eventFilterSelect = document.getElementById("event-filter"); // Filter select

  // Keep track of the element that opened the modal
  let modalTriggerElement = null;

  // === State Variables ===
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let selectedDate = new Date(currentDate);
  let events = {}; // Loaded in initCalendar
  let currentlyFocusedDayIndex = -1; // For keyboard nav

  // === Constants ===
  const STORAGE_KEY = "calendarEventsEnhanced";
  const CATEGORIES_KEY = "calendarCategories"; // NEW key for categories
  const THEME_KEY = "calendarTheme";
  const ANIMATION_KEY = "calendarAnimationPaused";
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const DEFAULT_EVENT_COLOR = "#007bff"; // Default color if none specified
  const DEFAULT_EVENT_ICON = "fa-tag"; // Default icon

  // === Category Management ===
  let categories = []; // Loaded in initCalendar

  function loadCategories() {
    const storedCategories = localStorage.getItem(CATEGORIES_KEY);
    if (storedCategories) {
      try {
        const parsed = JSON.parse(storedCategories);
        // Basic validation: ensure it's an array of strings
        if (
          Array.isArray(parsed) &&
          parsed.every((item) => typeof item === "string")
        ) {
          return parsed.sort((a, b) => a.localeCompare(b)); // Keep sorted
        } else {
          console.error(
            "Stored categories data is not an array of strings:",
            parsed
          );
          localStorage.removeItem(CATEGORIES_KEY);
          return []; // Default to empty
        }
      } catch (e) {
        console.error("Error parsing stored categories:", e);
        localStorage.removeItem(CATEGORIES_KEY);
        return []; // Default to empty
      }
    }
    return []; // Default to empty if nothing stored
  }

  function saveCategories() {
    localStorage.setItem(
      CATEGORIES_KEY,
      JSON.stringify(categories.sort((a, b) => a.localeCompare(b)))
    );
    populateCategoryDropdowns(); // Update dropdowns whenever categories change
  }

  function addCategory(newCategoryName) {
    const trimmedName = newCategoryName.trim();
    if (!trimmedName) {
      alert("Category name cannot be empty.");
      return false;
    }
    if (
      categories.some((cat) => cat.toLowerCase() === trimmedName.toLowerCase())
    ) {
      alert(`Category "${trimmedName}" already exists.`);
      return false;
    }
    categories.push(trimmedName);
    saveCategories(); // This saves and repopulates dropdowns
    return true;
  }

  function populateCategoryDropdowns() {
    // Clear existing options (keep "All Categories" in filter)
    eventCategorySelect.innerHTML = "";
    eventFilterSelect.innerHTML = '<option value="all">All Categories</option>';

    if (categories.length === 0) {
      // Add a default placeholder if no categories exist yet
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "No categories defined";
      defaultOption.disabled = true;
      eventCategorySelect.appendChild(defaultOption);
      // Optionally disable filter if no categories? Or just leave "All"
    } else {
      categories.forEach((category) => {
        // Add to modal dropdown
        const modalOption = document.createElement("option");
        modalOption.value = category;
        modalOption.textContent = category;
        eventCategorySelect.appendChild(modalOption);

        // Add to filter dropdown
        const filterOption = document.createElement("option");
        filterOption.value = category;
        filterOption.textContent = category;
        eventFilterSelect.appendChild(filterOption);
      });
    }
  }

  // === Event Loading/Saving ===
  function loadEvents() {
    const storedEvents = localStorage.getItem(STORAGE_KEY);
    if (storedEvents) {
      try {
        const parsed = JSON.parse(storedEvents);
        if (typeof parsed === "object" && parsed !== null) {
          Object.keys(parsed).forEach((key) => {
            if (!Array.isArray(parsed[key])) {
              console.warn(`Data for ${key} is not an array, fixing.`);
              parsed[key] =
                typeof parsed[key] === "object" && parsed[key] !== null
                  ? [parsed[key]]
                  : [];
            }
          });
          return parsed;
        } else {
          console.error("Stored events data is not an object:", parsed);
          localStorage.removeItem(STORAGE_KEY);
          return {};
        }
      } catch (e) {
        console.error("Error parsing stored events:", e);
        localStorage.removeItem(STORAGE_KEY);
        return {};
      }
    }
    return {};
  }

  function saveEvents() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    renderEventsList(); // Update list whenever events are saved
    renderCalendar(); // Re-render calendar for markers/A11y updates
  }

  // === Modal Functions ===
  function openModal(dateKey, eventIndex = -1) {
    modalTriggerElement = document.activeElement; // Store focused element
    eventDateInput.value = dateKey;
    eventIndexInput.value = eventIndex;

    if (eventIndex > -1 && events[dateKey] && events[dateKey][eventIndex]) {
      const existingEvent = events[dateKey][eventIndex];
      modalTitle.textContent = "Edit Event";
      saveEventButton.textContent = "Update Event"; // Change button text
      eventTitleInput.value = existingEvent.title || "";
      eventTimeInput.value = existingEvent.time || "";
      // Ensure the saved category exists in the current list, otherwise select the first available one
      eventCategorySelect.value = categories.includes(existingEvent.category)
        ? existingEvent.category
        : categories[0] || "";
      eventDescriptionInput.value = existingEvent.description || "";
      // Populate color and icon
      eventColorInput.value = existingEvent.color || DEFAULT_EVENT_COLOR;
      eventIconInput.value = existingEvent.icon || "";
    } else {
      modalTitle.textContent = "Add New Event";
      saveEventButton.textContent = "Save Event"; // Default button text
      eventIndexInput.value = -1;
      eventForm.reset(); // Clear the form fields (will clear title, time, desc)
      // Select the first available category by default, or none if list is empty
      eventCategorySelect.value = categories[0] || "";
      // Reset color and icon fields for new event
      eventColorInput.value = DEFAULT_EVENT_COLOR;
      eventIconInput.value = ""; // Clear icon field for new event
    }
    modal.style.display = "block";
    // Set focus to the first focusable element (title input) after short delay
    setTimeout(() => eventTitleInput.focus(), 50);
  }

  function closeModal() {
    modal.style.display = "none";
    // Return focus to the element that opened the modal
    if (modalTriggerElement) {
      modalTriggerElement.focus();
      modalTriggerElement = null;
    }
  }

  // Close modal on Escape key
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  // Basic Focus Trapping
  const focusableElementsString =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      const focusableElements = modal.querySelectorAll(focusableElementsString);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  });

  window.onclick = function (event) {
    if (event.target == modal) closeModal();
  };
  closeModalButton.onclick = closeModal;

  // Handle form submission
  eventForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const dateKey = eventDateInput.value;
    const eventIndex = parseInt(eventIndexInput.value, 10);
    const eventTitle = eventTitleInput.value.trim();
    const eventTime = eventTimeInput.value;
    const eventCategory = eventCategorySelect.value;
    const eventDesc = eventDescriptionInput.value.trim();
    const eventColor = eventColorInput.value; // Get color
    const eventIcon = eventIconInput.value.trim(); // Get icon (trim whitespace)

    if (!eventTitle) {
      alert("Event title cannot be empty.");
      eventTitleInput.focus();
      return;
    }

    // Include color and icon in the event data
    const newEventData = {
      title: eventTitle,
      time: eventTime,
      category: eventCategory,
      description: eventDesc,
      color: eventColor,
      icon: eventIcon,
    };

    if (!Array.isArray(events[dateKey])) {
      events[dateKey] = [];
    }

    if (eventIndex > -1 && events[dateKey][eventIndex]) {
      // Update existing event
      events[dateKey][eventIndex] = newEventData;
    } else {
      // Add new event
      events[dateKey].push(newEventData);
    }

    saveEvents();
    closeModal();
  });

  // --- Date Formatting ---
  function formatFullDate(date) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  }
  function formatShortDate(dateString) {
    // Input YYYY-MM-DD
    const [year, month, day] = dateString.split("-");
    if (!year || !month || !day) return dateString; // Fallback
    const dateObj = new Date(year, month - 1, day);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return dateObj.toLocaleDateString(undefined, options);
  }
  function formatTime(timeString) {
    // Input HH:MM
    if (!timeString) return "";
    const [hours, minutes] = timeString.split(":");
    if (isNaN(hours) || isNaN(minutes)) return ""; // Basic validation
    const dateForFormatting = new Date();
    dateForFormatting.setHours(parseInt(hours, 10), parseInt(minutes, 10));
    return dateForFormatting.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  }
  // Get YYYY-MM-DD string from a Date object
  function getDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }
  function updateSelectedDateDisplay(date) {
    selectedDateDisplay.textContent = formatFullDate(date);
  }
  // --- End Date Formatting ---

  // --- Theme and Animation Settings ---
  function applyTheme(theme) {
    body.classList.toggle("dark-mode", theme === "dark");
    themeToggle.checked = theme === "dark";
  }
  function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
  }
  function loadTheme() {
    const savedTheme =
      localStorage.getItem(THEME_KEY) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    applyTheme(savedTheme);
  }

  function applyAnimationSetting(paused) {
    body.classList.toggle("animations-paused", paused);
    animationToggle.checked = !paused; // Checkbox is checked when *not* paused (animation ON)
  }
  function saveAnimationSetting(paused) {
    localStorage.setItem(ANIMATION_KEY, paused ? "true" : "false");
  }
  function loadAnimationSetting() {
    const savedState = localStorage.getItem(ANIMATION_KEY);
    // Default to not paused (animations ON) unless explicitly saved as paused
    const isPaused = savedState === "true";
    applyAnimationSetting(isPaused);
  }

  themeToggle.addEventListener("change", function () {
    const newTheme = this.checked ? "dark" : "light";
    applyTheme(newTheme);
    saveTheme(newTheme);
  });

  animationToggle.addEventListener("change", function () {
    const isPaused = !this.checked; // Paused if checkbox is *not* checked
    applyAnimationSetting(isPaused);
    saveAnimationSetting(isPaused);
  });

  settingsToggleButton.addEventListener("click", () => {
    const isOpen = settingsSection.classList.toggle("open");
    settingsToggleButton.setAttribute("aria-expanded", isOpen);
  });

  // --- Calendar Initialization and Rendering ---
  function initCalendar() {
    events = loadEvents();
    categories = loadCategories(); // Load categories
    loadTheme();
    loadAnimationSetting();
    populateCategoryDropdowns(); // Populate dropdowns with loaded categories
    populateJumpToDate();
    updateMonthYearDisplay();
    renderCalendar();
    updateSelectedDateDisplay(selectedDate);
    renderEventsList(); // Initial render of the list
    setupEventListeners(); // Setup non-rendering event listeners
  }

  function updateMonthYearDisplay() {
    const monthName = monthNames[currentMonth];
    monthYearDisplay.textContent = `${monthName} ${currentYear}`;
    // Don't update list title here, it's updated in renderEventsList based on filters
  }

  // --- Jump to Date Functions (Unchanged logic) ---
  function populateJumpToDate() {
    /* ...unchanged... */ jumpMonthSelect.innerHTML = "";
    monthNames.forEach((month, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = month;
      jumpMonthSelect.appendChild(option);
    });
    jumpMonthSelect.value = currentMonth;
    jumpYearInput.value = currentYear;
  }
  function toggleJumpToDate(show) {
    /* ...unchanged... */ jumpToDateSection.style.display = show
      ? "block"
      : "none";
    if (show) {
      jumpMonthSelect.value = currentMonth;
      jumpYearInput.value = currentYear;
    }
  }
  monthYearDisplay.addEventListener("click", () => {
    /* ...unchanged... */
    const isVisible = jumpToDateSection.style.display === "block";
    toggleJumpToDate(!isVisible);
  });
  jumpButton.addEventListener("click", () => {
    /* ...unchanged... */
    const targetMonth = parseInt(jumpMonthSelect.value, 10);
    const targetYear = parseInt(jumpYearInput.value, 10);
    if (
      !isNaN(targetMonth) &&
      !isNaN(targetYear) &&
      targetYear >= 1900 &&
      targetYear <= 2100
    ) {
      changeMonth(targetMonth, targetYear); // Use helper function
      selectedDate = new Date(currentYear, currentMonth, 1); // Select 1st of new month
      updateSelectedDateDisplay(selectedDate);
      toggleJumpToDate(false);
    } else {
      alert("Please enter a valid year between 1900 and 2100.");
    }
  });
  // Close jump-to-date on outside click (unchanged)
  document.addEventListener("click", (event) => {
    if (
      !calendarHeader.contains(event.target) &&
      !jumpToDateSection.contains(event.target) &&
      jumpToDateSection.style.display === "block"
    ) {
      toggleJumpToDate(false);
    }
  });

  // --- Render Events List (with Search and Filter) ---
  function renderEventsList() {
    eventsListUl.innerHTML = ""; // Clear current list
    eventsListUl.style.opacity = "0"; // Start fade out

    const searchTerm = eventSearchInput.value.toLowerCase().trim();
    const selectedCategory = eventFilterSelect.value;
    const monthString = String(currentMonth + 1).padStart(2, "0");
    const currentMonthYearPrefix = `${currentYear}-${monthString}-`;

    let eventsFound = [];

    // 1. Gather all events for the current month
    const sortedDateKeys = Object.keys(events).sort((a, b) =>
      a.localeCompare(b)
    );
    sortedDateKeys.forEach((dateKey) => {
      if (dateKey.startsWith(currentMonthYearPrefix)) {
        const eventsArray = events[dateKey];
        if (Array.isArray(eventsArray)) {
          eventsArray.forEach((eventData, index) => {
            // Add dateKey and original index for potential linking/editing later
            eventsFound.push({
              ...eventData,
              dateKey: dateKey,
              originalIndex: index,
            });
          });
        }
      }
    });

    // 2. Filter based on category and search term
    const filteredEvents = eventsFound.filter((eventData) => {
      const categoryMatch =
        selectedCategory === "all" || eventData.category === selectedCategory;
      const searchMatch =
        !searchTerm ||
        (eventData.title &&
          eventData.title.toLowerCase().includes(searchTerm)) ||
        (eventData.description &&
          eventData.description.toLowerCase().includes(searchTerm));
      return categoryMatch && searchMatch;
    });

    // 3. Update Title
    const monthName = monthNames[currentMonth];
    let titleText = `Events in ${monthName}`;
    if (selectedCategory !== "all") {
      titleText += ` (${
        selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
      })`;
    }
    if (searchTerm) {
      titleText += ` matching "${searchTerm}"`;
    }
    eventsListTitle.textContent = titleText;

    // 4. Render filtered list items
    if (filteredEvents.length > 0) {
      filteredEvents.forEach((eventData) => {
        const li = document.createElement("li");
        const category = eventData.category || "Uncategorized";
        const eventColor = eventData.color || DEFAULT_EVENT_COLOR;
        const eventIcon = eventData.icon || DEFAULT_EVENT_ICON;
        // Ensure icon has 'fas' prefix if only the name is provided
        const iconClass = eventIcon.startsWith("fa-")
          ? `fas ${eventIcon}`
          : `fas ${DEFAULT_EVENT_ICON}`;

        li.className = `event-list-item`; // Generic class
        li.setAttribute("tabindex", "0"); // Make focusable
        li.dataset.date = eventData.dateKey;
        li.dataset.index = eventData.originalIndex;
        // Apply custom color via CSS variable for border
        li.style.setProperty("--event-color", eventColor);

        const formattedTime = formatTime(eventData.time);
        const formattedDate = formatShortDate(eventData.dateKey);
        const categoryDisplay = category;

        li.innerHTML = `
                      <span class="item-icon" aria-hidden="true" style="color: ${eventColor};"><i class="${iconClass}"></i></span>
                     <div class="item-content">
                         <div class="item-header">
                             <span class="item-title">${eventData.title}</span>
                             <time class="item-date" datetime="${
                               eventData.dateKey
                             }">${formattedDate}</time>
                         </div>
                         ${
                           formattedTime
                             ? `<div class="item-time"><strong>Time:</strong> <time datetime="${
                                 eventData.dateKey
                               }T${
                                 eventData.time || ""
                               }">${formattedTime}</time></div>`
                             : ""
                         }
                          <div class="item-category"><strong>Category:</strong> ${categoryDisplay}</div>
                          ${
                            eventData.description
                              ? `<div class="item-desc">${eventData.description.replace(
                                  /\n/g,
                                  "<br>"
                                )}</div>`
                              : ""
                          }
                      </div>
                      <div class="item-actions">
                           <button class="edit-event-list" data-date="${
                             eventData.dateKey
                           }" data-event-index="${
          eventData.originalIndex
        }" aria-label="Edit event ${eventData.title}" title="Edit">
                               <i class="fas fa-edit" aria-hidden="true"></i>
                           </button>
                           <button class="delete-event-list" data-date="${
                             eventData.dateKey
                           }" data-event-index="${
          eventData.originalIndex
        }" aria-label="Delete event ${eventData.title}" title="Delete">
                               <i class="fas fa-trash" aria-hidden="true"></i>
                           </button>
                      </div>
                  `;
        eventsListUl.appendChild(li);
      });
    } else {
      let emptyMessage = "No events scheduled for this month.";
      if (searchTerm || selectedCategory !== "all") {
        emptyMessage =
          "No events match your search/filter criteria for this month.";
      }
      eventsListUl.innerHTML = `<li class="no-events-message">${emptyMessage}</li>`;
    }

    // Fade in the new list
    setTimeout(() => {
      eventsListUl.style.opacity = "1";
    }, 50);
  }

  // --- Render Calendar Grid ---
  function renderCalendar() {
    daysGridElement.innerHTML = "";
    daysGridElement.classList.remove("fade-out");
    daysGridElement.setAttribute(
      "aria-label",
      `${monthNames[currentMonth]} ${currentYear}`
    ); // Update grid label
    currentlyFocusedDayIndex = -1; // Reset focus index
    let dayElements = []; // Store day elements for keyboard nav setup

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
    const today = new Date();
    const todayKey = getDateKey(today);
    const selectedKey = getDateKey(selectedDate);

    let currentDayIndex = 0; // Track index for focus management

    // Previous month padding
    for (let i = firstDayOfMonth; i > 0; i--) {
      const dayElement = createDayElement(
        daysInPrevMonth - i + 1,
        true,
        currentDayIndex++
      ); // is empty
      daysGridElement.appendChild(dayElement);
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const dateKey = getDateKey(date);
      const dayElement = createDayElement(i, false, currentDayIndex++, dateKey); // Pass dateKey

      // Basic Styling
      const dayOfWeek = date.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6)
        dayElement.classList.add("weekend");

      // Aria and Special Styling
      dayElement.setAttribute("aria-label", formatFullDate(date));
      if (dateKey === todayKey) {
        dayElement.classList.add("today");
        dayElement.setAttribute("aria-current", "date");
      }
      if (dateKey === selectedKey) {
        dayElement.classList.add("selected");
        dayElement.setAttribute("aria-selected", "true");
        // Ensure the selected day is focusable if navigating via keyboard
        if (currentlyFocusedDayIndex < 0)
          currentlyFocusedDayIndex = currentDayIndex - 1; // Set initial focus target
      } else {
        dayElement.setAttribute("aria-selected", "false");
      }

      // Event Marker and Popup
      const eventsArray = events[dateKey];
      if (Array.isArray(eventsArray) && eventsArray.length > 0) {
        addEventMarkerAndPopup(dayElement, dateKey, eventsArray);
        dayElement.setAttribute(
          "aria-label",
          `${dayElement.getAttribute("aria-label")}, ${
            eventsArray.length
          } event${eventsArray.length > 1 ? "s" : ""}`
        );
      }

      dayElements.push(dayElement); // Add to array for keyboard nav
      daysGridElement.appendChild(dayElement);
    }

    // Next month padding
    const totalCellsFilled = firstDayOfMonth + daysInMonth;
    const remainingCells =
      totalCellsFilled % 7 === 0 ? 0 : 7 - (totalCellsFilled % 7);
    for (let i = 1; i <= remainingCells; i++) {
      const dayElement = createDayElement(i, true, currentDayIndex++); // is empty
      daysGridElement.appendChild(dayElement);
    }

    // Make first focusable day tabbable
    setInitialFocusTarget(dayElements);
  }

  // Helper to add event marker and popup
  function addEventMarkerAndPopup(dayElement, dateKey, eventsArray) {
    dayElement.classList.add("has-event"); // Generic marker class
    // Use the color of the *first* event for the marker
    const firstEventColor = eventsArray[0]?.color || DEFAULT_EVENT_COLOR;
    dayElement.style.setProperty("--event-color", firstEventColor); // Set CSS var for marker

    const popupId = `popup-${dateKey}`;
    const popup = document.createElement("div");
    popup.className = `event-popup`;
    popup.id = popupId;
    popup.setAttribute("role", "tooltip"); // Identify as tooltip

    let popupHTML = "";
    eventsArray.forEach((eventData, index) => {
      const formattedTime = formatTime(eventData.time);
      const categoryDisplay = eventData.category || "Uncategorized";
      const editButtonId = `edit-${dateKey}-${index}`;
      const deleteButtonId = `delete-${dateKey}-${index}`;
      // Use custom color for popup item header/title maybe?
      const eventColor = eventData.color || DEFAULT_EVENT_COLOR;

      popupHTML += `
                   <div class="event-popup-item">
                       <h4 style="color: ${eventColor}; border-left-color: ${eventColor};">${
        eventData.title
      }</h4>
                       ${
                         formattedTime
                           ? `<p><strong>Time:</strong> <time datetime="${dateKey}T${
                               eventData.time || ""
                             }">${formattedTime}</time></p>`
                           : ""
                       }
                       <p><strong>Category:</strong> ${categoryDisplay}</p>
                      ${
                        eventData.description
                          ? `<p>${eventData.description.replace(
                              /\n/g,
                              "<br>"
                            )}</p>`
                          : ""
                      }
                      <div class="popup-actions">
                          <button class="edit-event" id="${editButtonId}" data-date="${dateKey}" data-event-index="${index}" aria-label="Edit event ${
        eventData.title
      }" title="Edit">
                              <i class="fas fa-edit" aria-hidden="true"></i>
                          </button>
                          <button class="delete-event" id="${deleteButtonId}" data-date="${dateKey}" data-event-index="${index}" aria-label="Delete event ${
        eventData.title
      }" title="Delete">
                              <i class="fas fa-trash" aria-hidden="true"></i>
                          </button>
                      </div>
                  </div>
              `;
    });

    popup.innerHTML = popupHTML;
    dayElement.appendChild(popup);
    dayElement.setAttribute("aria-describedby", popupId); // Link day to its popup for screen readers

    // Popup Interaction Logic (Mouse hover - unchanged)
    let enterTimeout, leaveTimeout;
    const showPopup = () => {
      clearTimeout(leaveTimeout);
      enterTimeout = setTimeout(
        () => dayElement.classList.add("show-popup"),
        150
      );
    };
    const hidePopup = () => {
      clearTimeout(enterTimeout);
      leaveTimeout = setTimeout(
        () => dayElement.classList.remove("show-popup"),
        200
      );
    };
    dayElement.addEventListener("mouseenter", showPopup);
    dayElement.addEventListener("mouseleave", hidePopup);
    popup.addEventListener("mouseenter", () => clearTimeout(leaveTimeout));
    popup.addEventListener("mouseleave", hidePopup);

    // Popup Button Clicks (using event delegation - MODIFIED for specific button clicks)
    popup.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (!button) return;
      e.stopPropagation(); // Prevent day click

      const date = button.dataset.date;
      const index = parseInt(button.dataset.eventIndex, 10);

      if (button.classList.contains("delete-event")) {
        const eventToDelete = events[date]?.[index];
        if (
          eventToDelete &&
          confirm(`Delete event "${eventToDelete.title}"?`)
        ) {
          events[date].splice(index, 1);
          if (events[date].length === 0) {
            delete events[date];
          }
          saveEvents();
          dayElement.classList.remove("show-popup");
          // Optional: Refocus the day cell after deletion
          dayElement.focus();
        }
      } else if (button.classList.contains("edit-event")) {
        dayElement.classList.remove("show-popup"); // Close popup before opening modal
        openModal(date, index);
      }
    });
  }

  // Helper to create a day element (with ARIA roles)
  function createDayElement(
    dayNumber,
    isEmpty = false,
    gridIndex,
    dateKey = null
  ) {
    // Added dateKey param
    const dayElement = document.createElement("div");
    dayElement.className = "day";
    dayElement.textContent = dayNumber;
    dayElement.setAttribute("role", "gridcell");
    dayElement.dataset.gridIndex = gridIndex; // Store index for keyboard nav

    if (isEmpty) {
      dayElement.classList.add("empty");
      dayElement.setAttribute("aria-disabled", "true"); // Mark as disabled
      dayElement.style.cursor = "default";
    } else {
      dayElement.setAttribute("aria-disabled", "false");
      dayElement.setAttribute("tabindex", "-1"); // Initially not tabbable
      if (dateKey) dayElement.dataset.dateKey = dateKey; // Add data-date-key if provided
      dayElement.addEventListener("click", handleDayClick);
      dayElement.addEventListener("keydown", handleDayKeydown); // Add keydown listener
    }
    return dayElement;
  }

  // --- Event Listeners Setup ---
  function setupEventListeners() {
    // Navigation Buttons
    document.getElementById("prev-month").addEventListener("click", () => {
      console.log("Previous month button clicked");
      navigateMonthWithAnimation("prev");
    });
    document.getElementById("next-month").addEventListener("click", () => {
      console.log("Next month button clicked");
      navigateMonthWithAnimation("next");
    });

    // Today Button
    document
      .getElementById("today-button")
      .addEventListener("click", goToToday);

    // Add Event Button
    addEventButton.addEventListener("click", () => {
      const dateKey = getDateKey(selectedDate);
      openModal(dateKey, -1); // Open modal for adding new event
    });

    // Search and Filter
    eventSearchInput.addEventListener("input", renderEventsList); // Use 'input' for instant feedback
    eventFilterSelect.addEventListener("change", renderEventsList);

    // Keyboard nav for events list (simple example)
    eventsListUl.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const items = Array.from(
          eventsListUl.querySelectorAll(".event-list-item")
        );
        const currentIndex = items.indexOf(document.activeElement);
        if (currentIndex !== -1) {
          e.preventDefault();
          let nextIndex;
          if (e.key === "ArrowDown") {
            nextIndex = (currentIndex + 1) % items.length;
          } else {
            // ArrowUp
            nextIndex = (currentIndex - 1 + items.length) % items.length;
          }
          items[nextIndex]?.focus();
        } else if (items.length > 0) {
          // If focus is not on an item, focus the first one
          items[0].focus();
        }
      }
    });

    // Add Category Button Listener
    addCategoryButton.addEventListener("click", () => {
      if (addCategory(newCategoryInput.value)) {
        newCategoryInput.value = ""; // Clear input on success
        newCategoryInput.focus(); // Keep focus for adding more
      }
    });
    // Optional: Add category on Enter key press in input
    newCategoryInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); // Prevent potential form submission
        if (addCategory(newCategoryInput.value)) {
          newCategoryInput.value = "";
        }
      }
    });

    // Event listener for list item actions
    eventsListUl.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (!button) return;

      const date = button.dataset.date;
      const index = parseInt(button.dataset.eventIndex, 10);

      if (button.classList.contains("delete-event-list")) {
        const eventToDelete = events[date]?.[index];
        if (
          eventToDelete &&
          confirm(`Delete event "${eventToDelete.title}" from list?`)
        ) {
          events[date].splice(index, 1);
          if (events[date].length === 0) {
            delete events[date];
          }
          saveEvents(); // This will re-render list and calendar
        }
      } else if (button.classList.contains("edit-event-list")) {
        openModal(date, index);
      }
    });
    // --- End NEW ---
  }

  // --- Calendar Interaction Logic ---
  function handleDayClick(event) {
    const dayElement = event.currentTarget;
    if (dayElement.classList.contains("empty")) return;

    const day = parseInt(dayElement.textContent, 10);
    selectedDate = new Date(currentYear, currentMonth, day);

    // Update visual selection
    const currentlySelected = daysGridElement.querySelector(".day.selected");
    if (currentlySelected) {
      currentlySelected.classList.remove("selected");
      currentlySelected.setAttribute("aria-selected", "false");
    }
    dayElement.classList.add("selected");
    dayElement.setAttribute("aria-selected", "true");

    updateSelectedDateDisplay(selectedDate);

    // Update focus target for keyboard nav
    currentlyFocusedDayIndex = parseInt(dayElement.dataset.gridIndex, 10);
    updateTabbableDay(dayElement);
  }

  // --- Keyboard Navigation for Calendar Grid ---
  function handleDayKeydown(event) {
    const key = event.key;
    if (
      ![
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "Home",
        "End",
        "PageUp",
        "PageDown",
        "Enter",
        " ",
      ].includes(key)
    ) {
      return; // Ignore other keys
    }
    event.preventDefault(); // Prevent default scrolling

    const currentFocusedElement = event.currentTarget;
    const currentIndex = parseInt(currentFocusedElement.dataset.gridIndex, 10);
    let nextIndex = currentIndex;

    switch (key) {
      case "ArrowRight":
        nextIndex = currentIndex + 1;
        break;
      case "ArrowLeft":
        nextIndex = currentIndex - 1;
        break;
      case "ArrowDown":
        nextIndex = currentIndex + 7;
        break;
      case "ArrowUp":
        nextIndex = currentIndex - 7;
        break;
      case "Home": // Go to the first day of the current view (may be prev month)
        nextIndex = Array.from(daysGridElement.children).findIndex(
          (el) => !el.classList.contains("empty")
        );
        break;
      case "End": // Go to the last day of the current view (may be next month)
        {
          const allDays = Array.from(daysGridElement.children);
          for (let i = allDays.length - 1; i >= 0; i--) {
            if (!allDays[i].classList.contains("empty")) {
              nextIndex = i;
              break;
            }
          }
        }
        break;
      case "PageDown": // Next Month
        navigateMonthWithAnimation("next", true); // true to keep focus attempt
        return; // Exit early, focus handled after render
      case "PageUp": // Previous Month
        navigateMonthWithAnimation("prev", true); // true to keep focus attempt
        return; // Exit early, focus handled after render
      case "Enter":
      case " ": // Select date on Enter or Space
        handleDayClick({ currentTarget: currentFocusedElement }); // Simulate a click
        return;
    }

    // Find the next valid day element within the grid bounds
    const allDayElements = Array.from(daysGridElement.children);
    if (nextIndex >= 0 && nextIndex < allDayElements.length) {
      const nextElement = allDayElements[nextIndex];
      if (nextElement && !nextElement.classList.contains("empty")) {
        focusDay(nextElement);
        // Optional: Update selectedDate visually on arrow navigation?
        // handleDayClick({ currentTarget: nextElement });
      }
    } else {
      // Handle wrapping or month change if needed (e.g., ArrowRight at end of row)
      // Basic implementation: just stay put if out of bounds
    }
  }

  function focusDay(dayElement) {
    if (dayElement && !dayElement.classList.contains("empty")) {
      updateTabbableDay(dayElement);
      dayElement.focus();
      currentlyFocusedDayIndex = parseInt(dayElement.dataset.gridIndex, 10);
    }
  }

  function setInitialFocusTarget(dayElements) {
    let targetElement = null;
    // Try to find the selected day first
    targetElement = dayElements.find((el) => el.classList.contains("selected"));
    // If no selected day, find today
    if (!targetElement)
      targetElement = dayElements.find((el) => el.classList.contains("today"));
    // If neither, find the first non-empty day
    if (!targetElement)
      targetElement = dayElements.find((el) => !el.classList.contains("empty"));

    if (targetElement) {
      currentlyFocusedDayIndex = parseInt(targetElement.dataset.gridIndex, 10);
      updateTabbableDay(targetElement);
    } else {
      // Handle case where grid might be entirely empty (unlikely)
      currentlyFocusedDayIndex = -1;
    }
  }

  function updateTabbableDay(newTabbableElement) {
    // Remove tabindex=0 from previously tabbable day
    const oldTabbable = daysGridElement.querySelector('.day[tabindex="0"]');
    if (oldTabbable) {
      oldTabbable.setAttribute("tabindex", "-1");
    }
    // Make the new element tabbable
    if (newTabbableElement) {
      newTabbableElement.setAttribute("tabindex", "0");
    }
  }

  // --- Month Navigation ---
  function navigateMonthWithAnimation(direction, attemptFocusRestore = false) {
    const previousFocusIndex = currentlyFocusedDayIndex; // Store focus before changing month

    daysGridElement.classList.add("fade-out");
    setTimeout(() => {
      const oldMonth = currentMonth;
      const oldYear = currentYear;

      if (direction === "prev") {
        currentMonth--;
        if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
        }
      } else {
        currentMonth++;
        if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
        }
      }

      // Avoid unnecessary re-render if month/year didn't actually change (e.g., hitting limit)
      if (currentMonth !== oldMonth || currentYear !== oldYear) {
        updateMonthYearDisplay();
        renderCalendar(); // Re-renders grid, which calls setInitialFocusTarget
        renderEventsList();

        // Attempt to restore focus (best effort)
        if (attemptFocusRestore) {
          setTimeout(() => {
            const allDays = Array.from(daysGridElement.children);
            let elementToFocus =
              allDays[previousFocusIndex] ||
              daysGridElement.querySelector('.day[tabindex="0"]');
            if (elementToFocus && !elementToFocus.classList.contains("empty")) {
              focusDay(elementToFocus);
            } else {
              // Fallback if index is now empty or invalid
              const firstFocusable =
                daysGridElement.querySelector('.day[tabindex="0"]');
              if (firstFocusable) firstFocusable.focus();
            }
          }, 50); // Delay slightly for rendering
        }
      } else {
        daysGridElement.classList.remove("fade-out"); // Remove fade if no change
      }
    }, 250); // Match CSS transition duration
  }

  // Helper function to change month/year and re-render
  function changeMonth(newMonth, newYear) {
    if (currentMonth === newMonth && currentYear === newYear) return; // No change

    daysGridElement.classList.add("fade-out");
    setTimeout(() => {
      currentMonth = newMonth;
      currentYear = newYear;
      updateMonthYearDisplay();
      renderCalendar();
      renderEventsList();
      // Focus handled by setInitialFocusTarget in renderCalendar
    }, 250);
  }

  // Go to Today function
  function goToToday() {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();

    selectedDate = new Date(today); // Always select today

    if (currentYear !== todayYear || currentMonth !== todayMonth) {
      changeMonth(todayMonth, todayYear);
      // Selection and focus are handled within renderCalendar
    } else {
      // Already in the correct month, just update selection visually & focus
      const todayKey = getDateKey(today);
      // Use the data-date-key which should now be reliably set
      const todayElement = daysGridElement.querySelector(
        `.day[data-date-key="${todayKey}"]`
      );
      if (todayElement) {
        handleDayClick({ currentTarget: todayElement }); // Selects the day
        focusDay(todayElement); // Ensure focus moves too
      } else {
        // If today element not found (shouldn't happen), re-render as fallback
        renderCalendar();
      }
    }
    updateSelectedDateDisplay(selectedDate); // Update text display regardless
  }

  // Initialize
  initCalendar();
});

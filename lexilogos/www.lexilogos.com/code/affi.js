//une fois le document chargé, on initialise l'objet clavier virtuel
document.addEventListener("DOMContentLoaded", function(event)
{
	conversion.saisie.focus();
	var cv = new clavierVirtuel();
});

class clavierVirtuel
{
	constructor()
	{
	
		//récupération et alimentation des boutons qui ne filtrent rien et permettent la saisie directe
		this.boutonsDirects = document.getElementById('boutonsDirects').getElementsByTagName('INPUT');
		var car;
		// pour chaque bouton
		for(var i = 0; i<this.boutonsDirects.length; i++)
		{
			//si on clique sur le bouton, on insère le caractère
			this.boutonsDirects[i].addEventListener('click', function(event)
			{
			//on élimine les caractères de remplissage pour ne garder que la valeur intéressante
				car = this.value;
				car = car.replace('◌', '');
				car = car.replace('\u{A0}', '');
				alpha(car)
			});
			attribuerInfobulle(this.boutonsDirects[i]);
		}	
		
		//récupération et alimentation des lettres nues utilisées dans la composition des caractères complexes
		this.divLettresNues = document.getElementById('lettresNues');
		if(this.divLettresNues != undefined)
		{
			//on récupère les boutons du contenant
			this.lettresNues = this.divLettresNues.getElementsByTagName('INPUT');
			//pour chaque bouton
			for(var i = 0; i < this.lettresNues.length; i++)
			{
				//on indique au bouton à qui il appartient (le clavier virtuel)
				this.lettresNues[i].parent = this;
				//on lui indique son fonctionnement au clic : il déclenche des actions du clavier virtuel
				this.lettresNues[i].addEventListener('click', function(event)
				{
					this.parent.initialiser();
					this.parent.filtre(this.value);
					this.parent.afficherDiacritiques(true);
				});
				attribuerInfobulle(this.lettresNues[i])
			}
		}
		
		//récupération et alimentation des diacritiques utilisées dans la composition des caractères complexes
		this.divDiacritiques = document.getElementById('divDiacritiques');
		if(this.divDiacritiques != undefined)
		{
			//on récupère les boutons du contenant
			this.diacritiques = this.divDiacritiques.getElementsByTagName('INPUT');
			//pour chaque bouton
			for(var i = 0; i < this.diacritiques.length; i++)
			{
				//on indique au bouton à qui il appartient (le clavier virtuel)
				this.diacritiques[i].parent = this;
				//on lui indique son fonctionnement au clic : il déclenche des actions du clavier virtuel (filtre)
				this.diacritiques[i].addEventListener('click', function(event)
				{
					this.parent.filtre(this.value);
				});
				attribuerInfobulle(this.diacritiques[i]);
			}
		}
		
		//récupération et alimentation des caractères complexes
		this.rechercheDiacritiques = document.getElementById('rechercheDiacritiques');
		if(this.rechercheDiacritiques != undefined)
		{
			//on récupère les boutons du contenant
			this.boutons = this.rechercheDiacritiques.getElementsByTagName('INPUT');
			var car;
			//pour chaque bouton
			for(var i = 0; i < this.boutons.length; i++)
			{
				//on indique au bouton à qui il appartient (le clavier virtuel)
				this.boutons[i].parent = this;
				//on lui indique son fonctionnement au clic : il insère le caractère et il déclenche une action du clavier virtuel (réinitialisation)
				this.boutons[i].addEventListener('click', function(event)
			{
			//on élimine les caractères de remplissage pour ne garder que la valeur intéressante
				car = this.value;
				car = car.replace('◌', '');
				car = car.replace('\u{A0}', '');
				alpha(car);
					this.parent.initialiser();
				});
				attribuerInfobulle(this.boutons[i]);
			}
		}
		
		//si on a bien les éléments nécessaires à la construction de caractères complexes, on initialise
		if(this.lettresNues != undefined && this.diacritiques != undefined)
		{
			this.initialiser();
		}
	}
}
clavierVirtuel.prototype.initialiser = function()
{
	for(var i=0;i< this.boutons.length;i++) this.boutons[i].style.display = 'none';
	this.afficherDiacritiques(false);
}

clavierVirtuel.prototype.filtre = function(caractere)
{
	var aDesBoutonsVisibles = false;
	var nbBoutonsVisibles = 0;
	var i = 0;
	//on regarde s'il y a des boutons visibles
	while(i < this.boutons.length && !aDesBoutonsVisibles)
	{
		if(this.boutons[i].style.display == 'inline') aDesBoutonsVisibles = true;
		i++;
	}
	//si pas de boutons visibles, le filtre va afficher tous les caractères qui correspondent à la recherche
	if(!aDesBoutonsVisibles)
	{
		var egalite = true;
		var style = 'inline';
	}
	//si des boutons visibles, le filtre va cacher tous les caractères qui ne correspondent pas à la recherche
	else
	{
		var egalite = false;
		var style = 'none';
	}
	//on applique le style qu'on a choisi à tous les boutons qui correspondent au critère qu'on a choisi
	//on vérifie au passage s'il reste des boutons visibles.
	for(var i = 0;i< this.boutons.length;i++)
	{
		if(this.boutons[i].className.includes(caractere) == egalite) this.boutons[i].style.display = style;
		if(this.boutons[i].style.display == 'inline') nbBoutonsVisibles++;
	}
	//si zéro bouton visible, on réinitialise
	if(nbBoutonsVisibles==0) this.initialiser();
}
clavierVirtuel.prototype.afficherDiacritiques = function(mode)
{
	if(mode == true) var style = 'inline';
	else var style = 'none';
	this.divDiacritiques.style.display = style;
}
function attribuerInfobulle(bouton)
{
	if(bouton.title != '')
	{
		//on supprime la balise titre mais on réserve pour éviter l'infobulle par défaut
		bouton.setAttribute('data-titre', bouton.title);
		bouton.removeAttribute('title');
		bouton.addEventListener('mouseover', function(event){
			var span = document.createElement('span');
			span.setAttribute('class', 'infobulle');
			span.innerHTML = this.getAttribute('data-titre');
			this.after(span);
		});
		bouton.addEventListener('mouseout', function(event){
			bouton.parentNode.removeChild(bouton.nextSibling);
		});
	}
}

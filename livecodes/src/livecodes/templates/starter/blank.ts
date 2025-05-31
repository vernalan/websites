import type { Template } from '../../models';

export const blank: Template = {
  name: 'blank',
  title: window.deps.translateString('templates.starter.blank', 'Blank Project'),
  thumbnail: 'assets/templates/blank.svg',
  activeEditor: 'markup',
  markup: {
    language: 'html',
    content: '',
  },
  style: {
    language: 'css',
    content: '',
  },
  script: {
    language: 'javascript',
    content: '',
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  imports: {},
  types: {},
};

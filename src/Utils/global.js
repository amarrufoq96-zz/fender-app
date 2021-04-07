/* global localStorage */

export const setItem = (item, object) => {
    if (!object) localStorage.removeItem(item);
    else localStorage.setItem(item, object);
  };
  
  export const clearItem = item => {
    localStorage.removeItem(item);
  };
  
  export const clearItems = () => {
    const elements = Object.keys(localStorage);
  
    if (Object.prototype.hasOwnProperty.call(localStorage, 'project_id')) { localStorage.removeItem('project_id'); }
    if (Object.prototype.hasOwnProperty.call(localStorage, 'project_name')) { localStorage.removeItem('project_name'); }
    if (Object.prototype.hasOwnProperty.call(localStorage, 'user_name')) { localStorage.removeItem('user_name'); }
    if (Object.prototype.hasOwnProperty.call(localStorage, 'project_menu')) { localStorage.removeItem('project_menu'); }
  
    for (let i = 0; i < elements.length - 1; i += 1) {
      if (!(elements[i] === 'token' || elements[i] === 'length')) {
        localStorage.removeItem(elements[i]);
      }
    }
  };
  
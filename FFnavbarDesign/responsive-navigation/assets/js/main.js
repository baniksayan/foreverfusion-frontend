
/*=============== TOGGLE ELEMENT SHOW/HIDE ===============*/
const toggleVisibility = (toggleBtn, element, className, closeBtn) => {
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      element.classList.add(className);
    });
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      element.classList.remove(className);
    });
  }
};

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Show/hide menu */
toggleVisibility(navToggle, navMenu, 'show-menu', navClose);

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close');

/* Show/hide search */
toggleVisibility(searchBtn, search, 'show-search', searchClose);

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close');

/* Show/hide login */
toggleVisibility(loginBtn, login, 'show-login', loginClose);
/*=============== TOGGLE ELEMENT SHOW/HIDE ===============*/
const toggleDropdown = (toggleBtn, element, className) => {
  let isOpen = false;

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (!isOpen) {
        element.classList.add(className);
        isOpen = true;
      } else {
        element.classList.remove(className);
        isOpen = false;
      }
    });

    element.addEventListener('mouseleave', () => {
      element.classList.remove(className);
      isOpen = false;
    });
  }
};

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownArrow = document.querySelector('.dropdown__arrow'),
      dropdownContainer = document.querySelector('.dropdown__container');

toggleDropdown(dropdownArrow, dropdownContainer, 'show-dropdown');

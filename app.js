function getContrastColor(hexColor) {
  if (hexColor.slice(0, 1) === '#') {
    hexColor = hexColor.slice(1);
  }
  var r = parseInt(hexColor.substr(0,2),16);
  var g = parseInt(hexColor.substr(2,2),16);
  var b = parseInt(hexColor.substr(4,2),16);
  var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? 'black' : 'white';
}

function createFlavorCategory(category, flavors, level = 1) {
  const categoryElement = document.createElement('div');
  categoryElement.className = 'flavor-category level-' + level;
  const backgroundColor = flavorColors[category] || '#bdbdbd';
  categoryElement.style.backgroundColor = backgroundColor;
  categoryElement.style.color = getContrastColor(backgroundColor);
  if (level === 1) {
    categoryElement.classList.add('main-category');
  }

  const categoryName = document.createElement('div');
  categoryName.className = 'category-name';
  categoryName.textContent = category;
  categoryElement.appendChild(categoryName);

  categoryElement.addEventListener('click', (event) => {
    event.stopPropagation();
    const flavorWheel = document.getElementById('flavor-wheel');
    const currentCategories = document.querySelectorAll(`.flavor-category.level-${level}`);
    const subcategoryContainer = document.querySelector('.subcategory-container.level-' + (level + 1));

    if (subcategoryContainer) {
      subcategoryContainer.remove();
      currentCategories.forEach(element => {
        element.style.display = '';
      });
      flavorWheel.style.gridTemplateColumns = '';
      
      if (level === 1) {
        const mainCategories = document.querySelectorAll('.flavor-category.main-category');
        mainCategories.forEach(element => {
          element.style.display = '';
        });
      }
    } else {
      currentCategories.forEach(element => {
        if (element !== categoryElement) {
          element.style.display = 'none';
        }
      });

      if (level === 1) {
        const mainCategories = document.querySelectorAll('.flavor-category.main-category');
        mainCategories.forEach(element => {
          if (element !== categoryElement) {
            element.style.display = 'none';
          }
        });
      }

      flavorWheel.style.gridTemplateColumns = '1fr';

      const newSubcategoryContainer = document.createElement('div');
      newSubcategoryContainer.className = `subcategory-container level-${level + 1}`;

      if (Array.isArray(flavors)) {
        flavors.forEach(flavor => {
          if (flavor !== category) {
            const flavorItem = document.createElement('div');
            flavorItem.className = 'flavor-item';
            flavorItem.textContent = flavor;
            const backgroundColor = flavorColors[flavor] || '#bdbdbd';
            flavorItem.style.backgroundColor = backgroundColor;
            flavorItem.style.color = getContrastColor(backgroundColor);
            newSubcategoryContainer.appendChild(flavorItem);
          }
        });
      } else {
        for (const subcategory in flavors) {
          const subFlavors = flavors[subcategory];
          if (subcategory === category && Array.isArray(subFlavors)) {
            subFlavors.forEach(flavor => {
              const flavorItem = document.createElement('div');
              flavorItem.className = 'flavor-item';
              flavorItem.textContent = flavor;
              const backgroundColor = flavorColors[flavor] || '#bdbdbd';
              flavorItem.style.backgroundColor = backgroundColor;
              flavorItem.style.color = getContrastColor(backgroundColor);
              newSubcategoryContainer.appendChild(flavorItem);
            });
          } else {
            const subcategoryElement = createFlavorCategory(subcategory, subFlavors, level + 1);
            newSubcategoryContainer.appendChild(subcategoryElement);
          }
        }
      }

      categoryElement.insertAdjacentElement('afterend', newSubcategoryContainer);
    }
  });

  return categoryElement;
}

function createFlavorWheel(wheel) {
  const flavorWheelElement = document.getElementById('flavor-wheel');

  for (const category in wheel) {
    const flavors = wheel[category];
    const categoryElement = createFlavorCategory(category, flavors, 1);
    flavorWheelElement.appendChild(categoryElement);
  }
}

createFlavorWheel(flavorWheel);
class Menu {
  constructor(menuEl) {
    this.menu = menuEl
    this.hover = this.menu.querySelector('.highlight')
    this.items = [...this.menu.childNodes].filter(
      (node) => node.nodeName === 'LI'
    )
    this.items.forEach((item, index) => {
      if (item.classList.contains('active')) this.selectedItem = index
      item.addEventListener('click', () => {
        if (this.selectedItem !== index) {
          this.items[this.selectedItem].classList.remove('active')
          this.setIndex(index)
        }
      })
    })
  }

  setIndex = (index) => {
    this.selectedItem = index
    this.onIndexChange()
  }
  onIndexChange = () => {
    this.items[this.selectedItem].classList.add('active')
    this.hover.style.setProperty(
      'transform',
      `translateX(${88 * this.selectedItem}px)`
    )
  }
}

const highlightDiv = document.querySelector('div.highlight')
const menuList = document.querySelector('.nav_menu')

const menu = new Menu(menuList)

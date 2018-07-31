class Tea {
  constructor() {
    this.color = 'green'
  }
  changeColor(color) {
    this.color = color
  }
  getColor() {
      return this.color
  }
}

const t = new Tea()

t.changeColor("red")
const r = t.getColor()
r
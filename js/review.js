const helpButtonList = document.querySelectorAll('.review-card-footer button')

const helpText = '도움됨'
const notHelpText = '도움이 돼요'

function helpButtonToggle() {
  // 1. class: btn-outlined <-> btn-fill-primary 로 toggle
  // 2. text 변경 : 도움이 돼요 <-> 도움됨
  // 3. span의 count수
  // this: helpButton

  if (this.classList.contains('btn-outlined')) {
    const checkIcon = document.createElement('i')
    checkIcon.classList.add('ic-check')
    checkIcon.setAttribute('aria-hidden', true)
    this.innerHTML = helpText
    this.prepend(checkIcon)
  } else {
    this.innerHTML = notHelpText
  }

  this.classList.toggle('btn-outlined')
  this.classList.toggle('btn-fill-primary')
}

helpButtonList.forEach((button) => {
  button.addEventListener('click', helpButtonToggle)
})

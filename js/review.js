const helpButtonList = document.querySelectorAll('.review-card-footer button')

const helpText = '도움됨'
const notHelpText = '도움이 돼요'

function helpButtonToggle() {
  // 1. class: btn-outlined <-> btn-fill-primary
  // 2. 텍스트내용 도움됨 <-> 도움이돼요
  // 3. count의 수
  // this : helpButton
  const likeButtonState = this.classList.contains('btn-fill-primary') // true, false

  const textElement = this.nextElementSibling
  const reviewCardFooter = this.parentNode

  if (likeButtonState) {
    // 활성화 상태 -> 비활성화
    this.innerHTML = notHelpText
  } else {
    // 비활성화 상태 -> 활성화
    const checkIcon = document.createElement('i')
    checkIcon.classList.add('ic-check')
    checkIcon.setAttribute('aria-hidden', true)

    this.innerHTML = helpText
    this.prepend(checkIcon)
  }

  if (textElement) {
    // 좋아요 텍스트가 있을 경우
    const countSpan = textElement.querySelector('span')
    const count = Number(countSpan.innerHTML.replaceAll(',', ''))
    let newCount = count
    if (likeButtonState) {
      newCount = newCount - 1
      if (newCount === 0) {
        reviewCardFooter.removeChild(textElement)
      } else {
        countSpan.innerHTML = newCount.toLocaleString()
      }
    } else {
      newCount = newCount + 1
      countSpan.innerHTML = newCount.toLocaleString()
    }
  } else {
    // 좋아요 텍스트가 없을 경우
    if (!likeButtonState) {
      // 0명 -> 1명 될 경우
      const newTextElement = document.createElement('p')
      newTextElement.innerHTML =
        '<strong><span>1</span>명</strong>에게 도움이 되었습니다.'
      reviewCardFooter.appendChild(newTextElement)
    }
  }

  this.classList.toggle('btn-fill-primary')
  this.classList.toggle('btn-outlined')
}

helpButtonList.forEach((button) => {
  button.addEventListener('click', helpButtonToggle)
})

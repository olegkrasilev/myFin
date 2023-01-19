const oblidationDots = document.getElementById("obligation__paragraph-dots");
const obligationParagraphMore = document.getElementById("obligation__paragraph-more");
const obligationButton = document.getElementById("obligation__button");

obligationButton.addEventListener('click', () => {
  obligationParagraphMore.classList.toggle('obligation__paragraph-more-isVisible')
  oblidationDots.classList.toggle('obligation__paragraph-dots--isHidden')
})

const inputWrapperButton = document.getElementById("input-wrapper__button");
const input = document.getElementById("input");

inputWrapperButton.addEventListener('click',() => {
  input.value = '';
})


/* Если табов много, фильтурем массив на без активного таба и на остальные вешаем через forEach неактивный класс */
const infoStockLeadersTab = document.getElementById("info__stock-leaders-tab");
const infoStockInactiveTab = document.getElementById("info__stock-leaders-inactive");
const infoStockLeadersContent = document.getElementById("info__stock-tab-content-leaders");
const tabInactive = document.getElementById("tabInactive");


function tabHandler() {
  infoStockLeadersTab.classList.toggle('info__stock-tab--isActive')
  infoStockLeadersTab.classList.toggle('info__stock-tab--isNotActive')
  infoStockInactiveTab.classList.toggle('info__stock-tab--isActive')
  infoStockInactiveTab.classList.toggle('info__stock-tab--isNotActive')
}

tabInactive.style.display = 'none'

infoStockLeadersTab.addEventListener('click',() => {
  tabHandler()
  infoStockLeadersContent.style.display = 'block'
  tabInactive.style.display = 'none'
})

infoStockInactiveTab.addEventListener('click',() => {
  tabHandler();
  infoStockLeadersContent.style.display = 'none'
  tabInactive.style.display = 'block'
})



/* Jquery */
$(function() {
  $('.info__stock-select').selectric();
});
/* Jquery  */

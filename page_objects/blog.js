const elements = {

    // CSS Selector
    searchBox: { selector: '#s'},

    // XPATH Selector
    firstResultFromSearch: { selector: ".//*[@id='post-211804']/div/div[2]/header/h2/a", locateStrategy: 'xpath'}
}

const commands = {

    searchQualityWorksBlog() {
        return this
        .waitThenSetValue('@searchBox', 'auto', 'Found and populated search box')
        .submitForm('@searchBox');
    }
}

export default {
  elements: elements,
  commands: [commands],
  url: `http://www.qualityworkscg.com/blog-page/`
}
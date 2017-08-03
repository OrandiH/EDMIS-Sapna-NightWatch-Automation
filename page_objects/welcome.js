// Define page elements in the object below
const elements = {

    // CSS Selector
    titleHeading: { selector: "h1.section-title"},
    titleDescription: { selector: "h1.section-title > b"}
}

/**
 * Export the elements so that they are accessible to nightwatch
 */
export default {
    elements: elements,
    url: "http://www.qualityworkscg.com/"
}
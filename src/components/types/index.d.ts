/**
 * Accordion item child component
 *
 * @param _props - Record<string, any>
 * @param _props.header - `<h3>` header text content
 * @param _props.children - Any HTML elements. Parent element: `<div>`
 */
export type AccordionItem = typeof import('./AccordionItem.astro').default

/**
 * Accordion parent component
 *
 * @param _props - Record<string, any>
 * @param _props.children -
 *  - Expects one or more AccordionItem components. Parent element: `<ul>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 */
type Accordion = typeof import('./Accordion.astro').default

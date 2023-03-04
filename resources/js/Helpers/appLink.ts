import { VNodeChild, PropType, h, VNode, VNodeProps } from "vue"
import { Link } from "@inertiajs/vue3"

const makeLink = (url: string, txt: VNode, props?: VNodeProps): VNode => {
    return h(
        Link,
        {href: url, class: 'underline'},
        () => txt
    )
}

const makeLinkIf =  (cond: boolean, url: string, txt: VNode, props?: VNodeProps): VNode => {
    return cond 
        ? makeLink(url, txt, props)
        : h(txt)
}

export { makeLink, makeLinkIf }
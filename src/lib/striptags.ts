import $ from "jquery";
import { isArray } from "lodash";
import _striptags from "striptags";

/**
 *
 * @param content [string] html文本
 * @param config [string[]|object] 配置选项
 * @returns string
 */
const striptags = (
    content: string,
    config?: { allowTags?: string[]; removeTags?: string[] } | string[]
): string => {
    if (!content) {
        return "";
    }
    if (isArray(config)) {
        return _striptags(content, config);
    }

    const { allowTags = [], removeTags = [] } = config || {};

    const $html = $(`<div>${content}</div>`);
    $html.find(removeTags.join(",")).remove();
    return _striptags($html.html(), allowTags);
};

export default striptags;

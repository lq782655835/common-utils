export default {
  functional: true,

  render(h, context) {
    let keyword = context.props.keyword;
    let tagName = context.props.tagName;
    let text = context.props.text;
    let highlightClassName = context.props.highlightClassName;
    let highlightWrapperClassName = context.props.highlightWrapperClassName;
    let disabled = context.props.disabled; // disabled可用于

    if (!keyword || disabled) {
      return h(
        tagName,
        { class: [highlightWrapperClassName], ...context.data },
        text
      );
    }

    if (!text) return;

    let children = text.split(new RegExp(`(${keyword})`, "ig"));
    children = children.map(currentText => {
      if (currentText.toLowerCase() === keyword.toLowerCase()) {
        return h(
          "span",
          { class: [highlightClassName], style: { color: "#ed5f5f" } },
          [currentText]
        );
      }
      return currentText;
    });

    return h(
      tagName,
      { class: [highlightWrapperClassName], ...context.data },
      children
    );
  },

  props: {
    keyword: {
      type: String,
      default: ""
    },
    tagName: {
      type: String,
      default: "span"
    },
    text: {
      type: String,
      default: ""
    },
    highlightClassName: {
      type: String,
      default: "highlight"
    },
    highlightWrapperClassName: {
      type: String,
      default: "highlight-wrapper"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};

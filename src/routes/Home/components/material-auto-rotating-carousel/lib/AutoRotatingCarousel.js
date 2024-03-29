'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _colors = require('@material-ui/core/colors');

var _withStyles = require('@material-ui/core/styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _transitions = require('@material-ui/core/styles/transitions');

var _ArrowBack = require('@material-ui/icons/ArrowBack');

var _ArrowBack2 = _interopRequireDefault(_ArrowBack);

var _ArrowForward = require('@material-ui/icons/ArrowForward');

var _ArrowForward2 = _interopRequireDefault(_ArrowForward);

var _Modal = require('@material-ui/core/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Fade = require('@material-ui/core/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _materialUiDots = require('material-ui-dots');

var _materialUiDots2 = _interopRequireDefault(_materialUiDots);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _SwipableCarouselView = require('./SwipableCarouselView');

var _SwipableCarouselView2 = _interopRequireDefault(_SwipableCarouselView);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    '& > *:focus': {
      outline: 'none'
    }
  },
  content: {
    width: '60%',
    maxWidth: 700,
    height: 'calc(100% - 96px)',
    maxHeight: 600,
    margin: '-16px auto 0',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  contentMobile: {
    width: '100%',
    height: '100%',
    maxWidth: 'initial',
    maxHeight: 'initial',
    margin: 0,
    top: 0,
    transform: 'none'
  },
  arrow: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: 'calc((100% - 96px) / 2 + 24px)'
  },
  arrowLeft: {
    left: -96
  },
  arrowRight: {
    right: -96
  },
  arrowIcon: {
    color: _colors.grey[700]
  },
  carouselWrapper: {
    overflow: 'hidden',
    borderRadius: 14,
    transform: 'scale(1.0)',
    background: 'transparent',
    height: '100%'
  },
  dots: {
    paddingTop: 36,
    margin: '0 auto'
  },
  dotsMobile: {
    paddingTop: 0
  },
  dotsMobileLandscape: {
    paddingTop: 20
  },
  footer: {
    marginTop: -72,
    width: '100%',
    position: 'relative',
    textAlign: 'center'
  },
  footerMobile: {
    marginTop: -92
  },
  footerMobileLandscape: {
    marginTop: -3,
    transform: 'translateY(-50vh)',
    display: 'inline-block',
    width: 'auto'
  },
  slide: {
    width: '100%',
    height: '100%'
  },
  slideMobile: {
    width: '100%',
    height: '100%'
  },
  carousel: {
    height: '100%'
  },
  carouselContainer: {
    height: '100%'
  },
  closed: {}
};

var AutoRotatingCarousel = function (_Component) {
  _inherits(AutoRotatingCarousel, _Component);

  function AutoRotatingCarousel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AutoRotatingCarousel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutoRotatingCarousel.__proto__ || Object.getPrototypeOf(AutoRotatingCarousel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      slideIndex: 0
    }, _this.handleContentClick = function (e) {
      return e.stopPropagation() || e.preventDefault();
    }, _this.handleChange = function (slideIndex) {
      _this.setState({
        slideIndex: slideIndex
      }, _this.onChange(slideIndex));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AutoRotatingCarousel, [{
    key: 'decreaseIndex',
    value: function decreaseIndex() {
      var slideIndex = this.state.slideIndex - 1;
      this.setState({
        slideIndex: slideIndex
      }, this.onChange(slideIndex));
    }
  }, {
    key: 'increaseIndex',
    value: function increaseIndex() {
      var slideIndex = this.state.slideIndex + 1;
      this.setState({
        slideIndex: slideIndex
      }, this.onChange(slideIndex));
    }
  }, {
    key: 'onChange',
    value: function onChange(slideIndex) {
      if (this.props.onChange) {
        this.props.onChange((0, _util.modulo)(slideIndex, this.props.children.length));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames3,
          _classNames4,
          _this2 = this;

      var _props = this.props,
          autoplay = _props.autoplay,
          children = _props.children,
          classes = _props.classes,
          hideArrows = _props.hideArrows,
          interval = _props.interval,
          label = _props.label,
          landscapeProp = _props.landscape,
          mobile = _props.mobile,
          open = _props.open,
          onClose = _props.onClose,
          onStart = _props.onStart;

      var landscape = mobile && landscapeProp;
      var transitionDuration = { enter: _transitions.duration.enteringScreen, exit: _transitions.duration.leavingScreen };

      var carousel = _react2.default.createElement(
        _SwipableCarouselView2.default,
        {
          autoplay: open && autoplay,
          className: classes.carousel,
          containerStyle: { height: '100%' },
          index: this.state.slideIndex,
          interval: interval,
          onChangeIndex: this.handleChange,
          slideClassName: classes.slide
        },
        children.map(function (c, i) {
          return _react2.default.cloneElement(c, {
            mobile: mobile,
            landscape: landscape,
            key: i
          });
        })
      );

      return _react2.default.createElement(
        _Modal2.default,
        {
          className: (0, _classnames2.default)(classes.root, _defineProperty({}, classes.rootMobile, mobile)),
          open: open,
          onClose: onClose,
          BackdropProps: { transitionDuration: transitionDuration }
        },
        _react2.default.createElement(
          _Fade2.default,
          {
            appear: true,
            'in': open,
            timeout: transitionDuration
          },
          _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)(classes.content, _defineProperty({}, classes.contentMobile, mobile)),
              onClick: this.handleContentClick
            },
            _react2.default.createElement(
              _Paper2.default,
              {
                elevation: mobile ? 0 : 1,
                className: classes.carouselWrapper },
              carousel
            ),
            _react2.default.createElement(
              'div',
              { style: landscape ? { minWidth: 300, maxWidth: 'calc(50% - 48px)', padding: 24, float: 'right' } : null },
              _react2.default.createElement(
                'div',
                {
                  className: (0, _classnames2.default)(classes.footer, (_classNames3 = {}, _defineProperty(_classNames3, classes.footerMobile, mobile), _defineProperty(_classNames3, classes.footerMobileLandscape, landscape), _classNames3))
                },
                label && _react2.default.createElement(
                  _Button2.default,
                  {
                    variant: 'raised',
                    onClick: onStart
                  },
                  label
                ),
                _react2.default.createElement(_materialUiDots2.default, {
                  count: children.length,
                  index: (0, _util.modulo)(this.state.slideIndex, children.length),
                  className: (0, _classnames2.default)(classes.dots, (_classNames4 = {}, _defineProperty(_classNames4, classes.dotsMobile, mobile), _defineProperty(_classNames4, classes.dotsMobileLandscape, landscape), _classNames4)),
                  onDotClick: this.handleChange
                })
              )
            ),
            !mobile && !hideArrows && _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _Button2.default,
                {
                  variant: 'fab',
                  className: (0, _classnames2.default)(classes.arrow, classes.arrowLeft),
                  onClick: function onClick() {
                    return _this2.decreaseIndex();
                  }
                },
                _react2.default.createElement(_ArrowBack2.default, { className: classes.arrowIcon })
              ),
              _react2.default.createElement(
                _Button2.default,
                {
                  variant: 'fab',
                  className: (0, _classnames2.default)(classes.arrow, classes.arrowRight),
                  onClick: function onClick() {
                    return _this2.increaseIndex();
                  }
                },
                _react2.default.createElement(_ArrowForward2.default, { className: classes.arrowIcon })
              )
            )
          )
        )
      );
    }
  }]);

  return AutoRotatingCarousel;
}(_react.Component);

AutoRotatingCarousel.defaultProps = {
  autoplay: true,
  interval: 3000,
  mobile: false,
  open: false,
  hideArrows: false
};

AutoRotatingCarousel.propTypes = {
  /** If `false`, the auto play behavior is disabled. */
  autoplay: _propTypes2.default.bool,
  /** Object for customizing the CSS classes. */
  classes: _propTypes2.default.object.isRequired,
  /** Delay between auto play transitions (in ms). */
  interval: _propTypes2.default.number,
  /** Button text. If not supplied, the button will be hidden. */
  label: _propTypes2.default.string,
  /** If `true`, slide will adjust content for wide mobile screens. */
  landscape: _propTypes2.default.bool,
  /** If `true`, the screen width and height is filled. */
  mobile: _propTypes2.default.bool,
  /** Fired when the index changed. Returns current index. */
  onChange: _propTypes2.default.func,
  /** Fired when the gray background of the popup is pressed when it is open. */
  onClose: _propTypes2.default.func,
  /** Fired when the user clicks the getting started button. */
  onStart: _propTypes2.default.func,
  /** Controls whether the AutoRotatingCarousel is opened or not. */
  open: _propTypes2.default.bool,
  /** If `true`, the left and right arrows are hidden in the desktop version. */
  hideArrows: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(styles)(AutoRotatingCarousel);
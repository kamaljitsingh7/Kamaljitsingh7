import { SharedFunctionsCls } from '../../shared_functions';

class HeaderElmModelCls {
  constructor() {
    this.headerType = {
      Pen: 'pen',
      Tag: 'tag'
    };
    // this.pageLabels = {};
    this.pageColorDataObj = {
      ['--sha-pg008-head-bg']: ['#C5CAE9'],
      ['--sha-pg008-head-txt']: ['black'],
      ['--sha-pg008-head-triangle-bg']: ['#7986CB'],
      ['--sha-pg008-head-triangle-txt']: ['black'],
      ['--sha-pg008-dot-bg']: ['white'],
      ['--sha-pg008-dot-txt']: ['black'],
    };

  }

  onPageLoad(_$pageElm) {
    SharedFunctionsCls.setPageCssVariables(_$pageElm, this.pageColorDataObj);
    this.setContainerDimensions(_$pageElm);
  }

  setContainerDimensions(_$pageElm) {
    if (_$pageElm && _$pageElm.length) {
      var $parentContainer = _$pageElm.parent();
      var containerDimensions = {};
      setTimeout(() => {
        containerDimensions.Width = $parentContainer.width();
        containerDimensions.Height = $parentContainer.height();
        _$pageElm[0].style.setProperty('--container-width', containerDimensions.Width + 'px');
        _$pageElm[0].style.setProperty('--container-height', containerDimensions.Height + 'px');
      }, 10)
    }
  }

}
export { HeaderElmModelCls }

import { containerless, customElement, bindable } from 'aurelia-framework';
import { HeaderElmModelCls } from './header_elm_model';

@customElement('cst-header-elm') //custom name
@containerless() //to remove custom element wrapper in dom


/*

Note : Min height should be 130px and min width should be 350px
@bindable details = {
        Type : 'pen'/'tag',
        Heading : 'Tenders',
}
 @bindable options = {
    ChangeDirection : true,
 }   
*/
class HeaderElmCls {
    @bindable details;
    @bindable options;
    constructor(){
        this.mdlObj = new HeaderElmModelCls();   
        //this.pageLabels = this.mdlObj.pageLabels;
        this.headerType = this.mdlObj.headerType;
    }
    attached(){
        var $headerMainElm = $(this.headerMainElm);
        this.mdlObj.onPageLoad($headerMainElm);        
    }

}
export { HeaderElmCls }

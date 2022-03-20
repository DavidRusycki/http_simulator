let Accordion = (function(){

    let id = '';
    let Elements = [];

    let setId = (sId) => {
        id = sId;
    }
    let getId = () => {
        return id;
    }

    let addElement = (oElement) => {
        Elements.push(oElement);
    }
    let setElements = (aElements) => {
        Elements = aElements;
    }
    let getElements = () => {
        return Elements;
    }

    let getNewAccordion = (sId, aElements, sContent) => {

        let sClassButton = getClassButton();
        let oButton = getButton(sClassButton, sId);

        for (let oItem of aElements) {
            oButton.appendChild(oItem);
        }

        let sClassItemHeader = getClassItemHeader();
        let oTitulo = getTituloAccordion(sClassItemHeader, sId);
        oTitulo.appendChild(oButton);

        let sClassDivContentBody = getClassDivContentBody();
        let oDivContentBody = getDivContentBody(sClassDivContentBody, sContent);

        let sClassDivContent = getClassDivContent();
        let oDivContent = getDivContent(sClassDivContent, sId);
        oDivContent.appendChild(oDivContentBody);

        let sClassAccordionItem = getClassAccordionItem();
        let oItem = getDivAccordionItem(sClassAccordionItem);
        oItem.appendChild(oTitulo);
        oItem.appendChild(oDivContent);

        return oItem;
    }

    let getDivContentBody = (sClassDivContentBody, sContent) => {
        let oDivContentBody = document.createElement('div');
        oDivContentBody.className = sClassDivContentBody;
        oDivContentBody.innerHTML = sContent;

        return oDivContentBody;
    }

    let getDivContent = (sClassDivContent, sId) => {
        let oDivContent = document.createElement('div');
        oDivContent.id = 'collapse' + sId;
        oDivContent.className = sClassDivContent;
        oDivContent.setAttribute('aria-labelledby', 'heading' + sId);
        oDivContent.setAttribute('data-bs-parent', '#accordion' + sId);

        return oDivContent;
    }

    let getButton = (sClassButton, sId) => {
        let oButton = document.createElement('button');
        oButton.className = sClassButton;
        oButton.type = 'button';
        oButton.setAttribute('data-bs-toggle', 'collapse');
        oButton.setAttribute('data-bs-target', '#collapse' + sId);
        oButton.setAttribute('aria-expanded', 'true');
        oButton.setAttribute('aria-controls', 'collapse' + sId);

        return oButton;
    }

    let getTituloAccordion = (sClassItemHeader, sIdItem) => {
        let oTitulo = document.createElement('h2');
        oTitulo.className = sClassItemHeader;
        oTitulo.id = 'heading' + sIdItem;

        return oTitulo;
    }

    let getDivAccordionItem = (sClass) => {
        let oDiv = document.createElement('div');
        oDiv.className = sClass;

        return oDiv;
    }

    let getClassAccordionItem = () => {
        return 'accordion-item';
    }

    let getClassItemHeader = () => {
        return 'accordion-header';
    }

    let getClassButton = () => {
        return 'accordion-button';
    }

    let getClassDivContent = () => {
        return 'accordion-collapse collapse show';
    }

    let getClassDivContentBody = () => {
        return 'accordion-body';
    }

    return {
        setId : (sId) => {
            setId(sId);
        },
        getId : () => {
            return getId();
        },
        getInstance : (sIdItem, aElements, sContent) => {
            setId(sIdItem);
            setElements(aElements);
            return getNewAccordion(sIdItem, aElements, sContent);
        }
    };

}());
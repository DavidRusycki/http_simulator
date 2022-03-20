let js = (function(){

    let verificaRequisicao = () => {
        montaAccordionSucesso();
    }

    let montaAccordionSucesso = () => {
        let oAccordion = getAccordionSucesso();

        let oComunicacao = getDivComunicacao();
        oComunicacao.appendChild(oAccordion);
    }

    let getDivComunicacao = () => {
        let oDiv = document.getElementById('comunicacao')
        
        return oDiv;
    }

    let getAccordionSucesso = () => {
        let aElementos = [];
        aElementos.push(getArrowRequest('green'));
        aElementos.push(getTitulo('REQUEST'));
        let oAccordion = Accordion.getInstance('1', aElementos, 'requisição topper');

        return oAccordion;
    }

    let getTitulo = (sTitulo) => {
        let oSpan = document.createElement('span');
        oSpan.className = 'col';
        oSpan.innerHTML = sTitulo;

        return oSpan;
    }

    let getArrowRequest = (sColor) => {
        let oSpan = document.createElement('span');
        oSpan.className = 'col';
        let oSvg = getSvgRequest(sColor);
        oSpan.appendChild(oSvg);

        return oSpan;
    }

    let getSvgRequest = (sColor) => {
        let oSvg = document.createElement('svg');
        oSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        oSvg.setAttribute('viewBox', '0 0 6000 512');
        oSvg.appendChild(getPathRequest(sColor));

        return oSvg;
    }

    let getPathRequest = (sColor) => {
        let oPath = document.createElement('path');
        oPath.setAttribute('d', 'M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z');
        oPath.setAttribute('fill', sColor);

        return oPath;
    }


    return {
        verificaRequisicao : () => {
            verificaRequisicao();
        }
    };

}());
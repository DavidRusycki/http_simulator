let js = (function(){

    const DESLIGADO = 1;
    const LIGADO = 2;
    const SEM_CONEXAO = 3;
    const FALHA_AUTENTICACAO = 4;
    const LINK = 'http://gitHub.com';

    let iIndice = 0;

    let getIndice = () => {
        return iIndice;
    }
    let setIndice = (i) => {
        iIndice = i;
    }
    let incrementIndice = () => {
        iIndice++;
    }

    let verificaRequisicao = () => {
        incrementIndice();
        let sLink = getEnderecoRequisicao();

        if (sLink == LINK) {
            switch (parseInt(getCampoServidor().value)) {
                case DESLIGADO:
                    montaAccordionServidorDesligado();
                    break;
                case LIGADO:        
                    montaAccordionServidorLigado();
                    break;
                case SEM_CONEXAO:
                    montaAccordionSemConexao();                    
                    break;
                case FALHA_AUTENTICACAO:
                    montaAccordionFalhaAutenticacao();       
                    break;
            
                default:
                    montaAccordion404();
                    break;
            }
        }
        else {
            montaAccordion404();
        }
    }

    let getEnderecoRequisicao = () => {
        return getCampoCliente().value;
    }
    
    let getCampoCliente = () => {
        return document.getElementById('cliente');
    }

    let getCampoServidor = () => {
        return document.getElementById('servidor');
    }

    let montaAccordionServidorDesligado = () => {
        let sContentResponse = ' HTTP/1.1 502 BAD GATEWAY \n date: Sun Mar 20 22:34:32 BRT 2022 \n content-type: text/html; charset=UTF-8 \n transfer-encoding: chunked \n connection: close \n server:  Microsoft-IIS/4.0 \n content-encoding: gzip';
        let sContentRequest = ' GET index.html HTTP/1.1 \n host: www.gitHub.com \n accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8 \n accept_encoding: gzip, deflate, br \n accept_language: pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3 \n user_agent: Mozilla/5.0 (Windows NT 10.0; WOW64; rv:46.0) Firefox/46.0 ';

        let oAccordionRequest = getAccordionRequest(getIndice(), 'green', sContentRequest);
        incrementIndice();
        let oAccordionResponse = getAccordionResponse(getIndice(), 'red', sContentResponse);

        let oComunicacao = getDivComunicacao();
        oComunicacao.appendChild(oAccordionRequest);
        oComunicacao.appendChild(oAccordionResponse);
    }

    let montaAccordionServidorLigado = () => {
        let sContentRequest = ' GET index.html HTTP/1.1 \n host: www.gitHub.com \n accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8 \n accept_encoding: gzip, deflate, br \n accept_language: pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3 \n user_agent: Mozilla/5.0 (Windows NT 10.0; WOW64; rv:46.0) Firefox/46.0 ';
        let oAccordionRequest = getAccordionRequest(getIndice(), 'green', sContentRequest);
        incrementIndice();
        
        let sContentResponse = 'HTTP/1.1 200 OK \n date: Sun Mar 20 22:53:41 BRT 2022 \n content-type: text/html; charset=UTF-8 \n transfer-encoding: chunked \n connection: close \n server:  Microsoft-IIS/4.0 \n content-encoding: gzip';
        let oAccordionResponse = getAccordionResponse(getIndice(), 'red', sContentResponse);

        let oComunicacao = getDivComunicacao();
        oComunicacao.appendChild(oAccordionRequest);
        oComunicacao.appendChild(oAccordionResponse);
    }

    let montaAccordionSemConexao = () => {
        let sContentRequest = ' GET index.html HTTP/1.1 \n host: www.gitHub.com \n accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8 \n accept_encoding: gzip, deflate, br \n accept_language: pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3 \n user_agent: Mozilla/5.0 (Windows NT 10.0; WOW64; rv:46.0) Firefox/46.0 ';
        let oAccordionRequest = getAccordionRequest(getIndice(), 'green', sContentRequest);
        incrementIndice();
        
        let sContentResponse = ' \n HTTP/1.1 408 REQUEST TIMED OUT \n date: Sun Mar 20 22:51:49 BRT 2022 \n content-type: text/html; charset=UTF-8 \n transfer-encoding: chunked \n connection: close \n server:  Microsoft-IIS/4.0 \n content-encoding: gzip ';
        let oAccordionResponse = getAccordionResponse(getIndice(), 'red', sContentResponse);

        let oComunicacao = getDivComunicacao();
        oComunicacao.appendChild(oAccordionRequest);
        oComunicacao.appendChild(oAccordionResponse);
    }

    let montaAccordionFalhaAutenticacao = () => {

        let sContentRequest = ' GET index.html HTTP/1.1 \n host: www.gitHub.com \n accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8 \n accept_encoding: gzip, deflate, br \n accept_language: pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3 \n user_agent: Mozilla/5.0 (Windows NT 10.0; WOW64; rv:46.0) Firefox/46.0 ';
        let oAccordionRequest = getAccordionRequest(getIndice(), 'green', sContentRequest);
        incrementIndice();
        
        let sContentResponse = '\n HTTP/1.1 401 UNAUTHORIZED \n date: Sun Mar 20 22:55:40 BRT 2022 \n content-type: text/html; charset=UTF-8 \n transfer-encoding: chunked \n connection: close \n server:  Microsoft-IIS/4.0 \n content-encoding: gzip';
        let oAccordionResponse = getAccordionResponse(getIndice(), 'red', sContentResponse);

        let oComunicacao = getDivComunicacao();
        oComunicacao.appendChild(oAccordionRequest);
        oComunicacao.appendChild(oAccordionResponse);
    }

    let montaAccordionSucesso = () => {
        let oAccordion = getAccordionSucesso();

        let oComunicacao = getDivComunicacao();
        oComunicacao.appendChild(oAccordion);
    }

    let montaAccordion404 = () => {
        let oAccordion = getAccordionRequest(getIndice(), 'red', '404 not found');
        let oComunicacao = getDivComunicacao();
        oComunicacao.appendChild(oAccordion);
    }

    let getDivComunicacao = () => {
        let oDiv = document.getElementById('accordionExample')
        
        return oDiv;
    }

    let getAccordionResponse = (iIndice, sColor, sConteudo) => {
        let aElementos = [];
        aElementos.push(getArrowResponse(sColor));
        aElementos.push(getTitulo('RESPONSE'));
        let oAccordion = Accordion.getInstance(iIndice, aElementos, sConteudo);

        return oAccordion;
    }

    let getAccordionRequest = (iIndice, sColor, sConteudo) => {
        let aElementos = [];
        aElementos.push(getArrowRequest(sColor));
        aElementos.push(getTitulo('REQUEST'));
        let oAccordion = Accordion.getInstance(iIndice, aElementos, sConteudo);

        return oAccordion;
    }

    let getTitulo = (sTitulo) => {
        let oSpan = document.createElement('span');
        oSpan.className = 'col';
        oSpan.innerHTML = sTitulo;

        return oSpan;
    }

    let getArrowResponse = (sColor) => {
        let oSpan = document.createElement('span');
        oSpan.className = 'col';
        let oSvg = getSvgResponse(sColor);
        oSpan.appendChild(oSvg);

        return oSpan;
    }

    let getArrowRequest = (sColor) => {
        let oSpan = document.createElement('span');
        oSpan.className = 'col';
        let oSvg = getSvgRequest(sColor);
        oSpan.appendChild(oSvg);

        return oSpan;
    }

    let getSvgResponse = (sColor) => {
        let oSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        oSvg.setAttribute('viewBox', '0 0 6000 512');
        oSvg.appendChild(getPathResponse(sColor));

        return oSvg;
    }

    let getPathResponse = (sColor) => {
        let oPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        oPath.setAttribute('d', 'M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z');
        oPath.setAttribute('fill', sColor);

        return oPath;
    }

    let getSvgRequest = (sColor) => {
        let oSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        oSvg.setAttribute('viewBox', '0 0 6000 512');
        oSvg.appendChild(getPathRequest(sColor));

        return oSvg;
    }

    let getPathRequest = (sColor) => {
        let oPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        oPath.setAttribute('d', 'M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z');
        oPath.setAttribute('fill', sColor);

        return oPath;
    }

    let clearAll = () => {
        let oDiv = getDivAccordion();

        let aElements = oDiv.childNodes;

        while(aElements.length) {
            for (let o of aElements) {
                oDiv.removeChild(o);
            }
        }
    }

    let getDivAccordion = () => {
        return document.getElementById('accordionExample');
    }

    return {
        verificaRequisicao : () => {
            verificaRequisicao();
        },
        clearAll : () => {
            clearAll();
        }
    };

}());
class Util {

    getAttributeBykey = (course, key) => {
        if (course[key]) {
            return course[key]
        }
        return "Carregando..."
    }

    getDateInputFromIso = (isoformat) => {
        if(isoformat === "Carregando...") return "Carregando..."
        const date = new Date(isoformat);
        return date.toISOString().substring(0, 10);
    }

    updateResourceByKey = (resource, key, value, setState) => {

        if (key === "palavras_chaves") {
            setState({
                ...resource,
                [key]: value.split,
            })
        }

        if (key === "data_de_criacao" 
            || key === "data_de_registro" 
            || key === "data_de_inicio" 
            || key === "data_de_fim") {
            const newDate = new Date(value).toISOString()
            setState({
                ...resource,
                [key]: newDate,
            })
        } else {
            setState({
                ...resource,
                [key]: value,
            })
        }
    }
}

const Utils = new Util()
export default Utils;
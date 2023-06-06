const normalizeUrl = (site) => {
    const startStr = site.startsWith('https://');

    if (startStr){
        return site;
    }else {
        return `${'https://'}${site}`;
    }
};

export default function encode(query, option, rule, lasted) {
    query =  query || {};
    option = option || [];
    let result = {};
    Object.keys(query).forEach(key => {
        let index = option.map(opt => opt.key).indexOf(key);
        // 参数未配置规则，不处理
        if (index === -1) {
            lasted && (result[key] = query[key]);
        } else {
            let opt = option[index];
            result[opt.alias || key] = rule.encode(opt.type || 'normal', opt.values, query[key]);
        }
    });
    return result;
}

'use-strict'

exports.ok = (data, msg, res, extra_res) => {
    var data = {
        'status': 'success',
        'message': msg,
        'data': data
    }

    if(extra_res != null){
        for(let extra in extra_res[0]){
            data['extra'] = extra_res[0]['extra']
        }
    }

    res.json(data)
    res.end
}

exports.customError = (status, msg, res) => {
    var data = {
        'status': status,
        'message': msg,
        'data': null
    }
    res.json(data)
    res.end
}
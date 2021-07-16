'use-strict'

const response = require('../../../config/res/config.res')
const fs = require('fs')

exports.filter = async (req, res) => {
    let json_data = fs.readFileSync('filter-data.json')
    let denom = JSON.parse(json_data)
    let filteramount = 100000

    if(typeof denom.status !== 'undefined' && denom.status == 1 && typeof denom.data.response.billdetails !== 'undefined'){
        let billdetails = denom.data.response.billdetails

        let denoms = [];
        await billdetails.forEach(value => {
            let denomstring = value.body[0]
            denomstring = denomstring.replace(' ', '')

            denomarray = denomstring.split(':')
            if(typeof denomarray[1] !== 'undefined' && !isNaN(parseFloat(denomarray[1])) && isFinite(denomarray[1]) && denomarray[1] > filteramount){
                denoms.push(parseInt(denomarray[1]))
            }
        });
        console.log(denoms[1])
        response.ok(denoms, 'response denom filter', res)
    }
}
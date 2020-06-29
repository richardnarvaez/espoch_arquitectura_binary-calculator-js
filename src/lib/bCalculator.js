let convertError = false;
let convertPrecision = 0;

function divideIntegers(one, base)
{
	var ends = new Array();
	divide(one, base, ends);
	return ends;
}

function divide(one, base, ends) {
    ends[ends.length] = one % base;
    var res = Math.floor(one / base);
    if (res >= base)
        divide(res, base, ends);
    else
        ends[ends.length] = res;
}

function occur(str, pattern) {
    var pos = str.indexOf(pattern);
    for (var count = 0; pos != -1; count++)
        pos = str.indexOf(pattern, pos + pattern.length);
    return count;
}

export function convertToDecimal(source, sourcebase) {

    var point = occur(source, '.');
    var comma = occur(source, ',');

    if ((point > 1 || comma > 1) ||
        (point > 0 && comma > 0)) {
        convertError = true;
        return 0;
    }

    var pointplace = source.length - 1;
    if (point > 0)
        pointplace = source.indexOf('.');
    else if (comma > 0)
        pointplace = source.indexOf(',');
    var power = pointplace + 1 - source.length;

    var dec = 0;

    for (var i = source.length - 1; i >= 0; --i) {
        if (source.charAt(i) == '.' || source.charAt(i) == ',')
            continue;
        var code = source.charCodeAt(i);
        if (code >= 58)
            code -= 55;
        else if (code >= 48)
            code -= 48;
        if (code >= sourcebase) {
            convertError = true;
            break;
        }
        dec += code * Math.pow(sourcebase, power++);
    }
    
    return dec;
}

export function convertOneToOther(source, sourcebase, targetbase, targetprecision) {
    var decresult = convertToDecimal(source, sourcebase);
    if (convertError)
        return "0";
    else {
        var scale = Math.pow(targetbase, targetprecision);
        var scaleddec = decresult * scale;
        var roundeddec = Math.round(scaleddec);
        convertPrecision = Math.abs(scaleddec - roundeddec) / scale;
        var ends = divideIntegers(roundeddec, targetbase);
        while (ends.length < targetprecision + 1)
            ends[ends.length] = 0;
        var result = "";
        for (var i = ends.length - 1; i >= 0; --i) {
            if (i == targetprecision - 1)
                result += ".";
            if (ends[i] < 10)
                result += String.fromCharCode(ends[i] + 48);
            else
                result += String.fromCharCode(ends[i] + 55);
        }
        return result;
    }
}

export default { convertToDecimal, convertOneToOther }
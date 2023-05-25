const alphabets = {
    01: 'A',
    02: 'B',
    03: 'C',
    04: 'D',
    05: 'E',
    06: 'F',
    07: 'G',
    08: 'H',
    09: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    26: 'Z'
};

module.exports = {
    isValidMongoObjectId: isValidMongoObjectId,
    isBase64: isBase64,
    isNumeric: isNumeric,
    isNumericAndPositive: isNumericAndPositive,
    isInteger: isInteger,
    isIntegerAndPositive: isIntegerAndPositive,
    isAlphaNumeric: isAlphaNumeric,
    isAlphaNumericWithUnderscore: isAlphaNumericWithUnderscore,
    isAlphaNumericWithFwdSlashUnderscore: isAlphaNumericWithFwdSlashUnderscore,
    isAlphaNumericWithSpace: isAlphaNumericWithSpace,
    isAlphaNumericWithSpaceDot: isAlphaNumericWithSpaceDot,
    isAlphaNumericWithDot: isAlphaNumericWithDot,
    isAlphaNumericWithDotUnderscore: isAlphaNumericWithDotUnderscore,
    isAlphaNumericWithSpaceUnderscore: isAlphaNumericWithSpaceUnderscore,
    isAlphaNumericWithSpaceDotUnderscore: isAlphaNumericWithSpaceDotUnderscore,
    isAlphaNumericWithSpecial: isAlphaNumericWithSpecial,
    isString: isString,
    isNonEmptyString: isNonEmptyString,
    isEqualStrings: isEqualStrings,
    isEqualStringsIgnoreCase: isEqualStringsIgnoreCase,
    isBoolean: isBoolean,
    isBooleanString: isBooleanString,
    isNonEmptyObject: isNonEmptyObject,
    isNonEmptyArray: isNonEmptyArray,
    isNonEmptySet: isNonEmptySet,
    isValidPhoneCountryCode: isValidPhoneCountryCode,
    isValidPhoneNumber: isValidPhoneNumber,
    isValidAccessType: isValidAccessType,
    isValidSettingValueType: isValidSettingValueType,
    isValidRouteType: isValidRouteType,
    isValidRouteStatus: isValidRouteStatus,
    isValidRouteState: isValidRouteState,
    isValidRouteAccess: isValidRouteAccess,
    isValidRouteCheckpointType: isValidRouteCheckpointType,
    isValidGeofenceType: isValidGeofenceType,
    isValidGeofenceStatus: isValidGeofenceStatus,
    isValidTimezone: isValidTimezone,
    isValidDeviceId: isValidDeviceId,
    isValidStosNotificationEntity: isValidStosNotificationEntity,
    isValidStosNotificationOperation: isValidStosNotificationOperation,
    isValidAction: isValidAction,
    isValidEmail: isValidEmail,
    isValidUserStatus: isValidUserStatus,
    isValidUserType: isValidUserType,
    isValidGender: isValidGender,
    isValidJson: isValidJson,
    isValidPassword: isValidPassword,
    isValidLogType: isValidLogType,
    isValidApplicationCode: isValidApplicationCode,
    isValidAlertType: isValidAlertType,
    isValidAlertPriority: isValidAlertPriority,
    isValidAlertStatus: isValidAlertStatus,
    isValidLatLng: isValidLatLng,
    isValidFileType: isValidFileType,
    isValidMimeType: isValidMimeType,
    isValidFrMimeType: isValidFrMimeType,
    isSuccessResponse: isSuccessResponse,
    isSuccessResponseAndNonEmptyData: isSuccessResponseAndNonEmptyData,
    isValidAlertSubscriptionFrequency: isValidAlertSubscriptionFrequency,
    isValidDob: isValidDob,
    isValidEventType: isValidEventType,
    isValidUTCTimestamp: isValidUTCTimestamp,
    isValidJwt: isValidJwt,
    isValidJwtAudience: isValidJwtAudience,
    isValidTokenType: isValidTokenType,
    isValidMessageType: isValidMessageType,
    isValidObject: isValidObject,
    isSuccessResponseAndNonEmptyDataArray: isSuccessResponseAndNonEmptyDataArray,
    isValidMonth: isValidMonth,
    isValidYear: isValidYear,
    isNonFutureMonth: isNonFutureMonth,
    isMonth1BeforeMonth2: isMonth1BeforeMonth2,
    isCurrentOrFutureYear: isCurrentOrFutureYear,
    multerErrorMessage: multerErrorMessage,
    isValidStringWithLength: isValidStringWithLength,
    mergeArraysWithoutDuplicates: mergeArraysWithoutDuplicates,
    isAlphaNumericWithSixteenBytes: isAlphaNumericWithSixteenBytes,
    isAlphaNumericWithHyphen: isAlphaNumericWithHyphen,
    isNonEmptyArrayWithMaxLength: isNonEmptyArrayWithMaxLength,
    getUTCTime: getUTCTime,
    isValidCINAME: isValidCINAME,
    isValidSAPID: isValidSAPID,
    isValidTaskCriticality: isValidTaskCriticality,
    isValidTaskStatus: isValidTaskStatus,
    isValidTaskType: isValidTaskType,
    dcToHhMmFormat: dcToHhMmFormat,
    dnToHhMmFormat: dnToHhMmFormat
}

// Imports
const Mongoose = require('mongoose');
const JWT = require('jsonwebtoken');

const Path = require('path');
const To = require('./To');
const ConstantUtil = require("./Constants")

/**
 * Check if given value is valid Mongo Object ID
 * @param {String} id 
 */
function isValidMongoObjectId(id) {
    return Mongoose.Types.ObjectId.isValid(id);
}

/**
 * Check if given string is base64
 * @param {*} str 
 */
function isBase64(str) {
    if (isNonEmptyString(str)) {
        return !!str.match(/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/);
    } else {
        return false;
    }
}
/**
 * Check if Number
 * @param {*} n 
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Check if Number and Positive
 * @param {*} n 
 */
function isNumericAndPositive(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && (parseFloat(n) >= 0);
}

// write a function that takes number as argument and return even or odd number


function isNonEmptyArrayWithMaxLength(arr = false) {
    const MAX_LENGTH = 20;
    return isNonEmptyArray(arr) && arr.length < MAX_LENGTH;
}

/**
 * Check if Integer
 * @param {*} n 
 */
function isInteger(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}

/**
 * Check if Integer and Positive
 * @param {*} n 
 */
function isIntegerAndPositive(n) {
    return !isNaN(parseInt(n)) && isFinite(n) && (parseInt(n) >= 0);
}

/**
 * Check if alpha numeric
 * @param {*} str 
 */
function isAlphaNumeric(str) {
    if (isNonEmptyString(str)) {
        return !!str.match(/^[a-zA-Z0-9]+$/i);
    } else {
        return false;
    }
}

function isValidCINAME(str) {
    return isAlphaNumeric(str);
}

/**
 * Check if alpha numeric with underscore
 * @param {*} str 
 */
function isAlphaNumericWithUnderscore(str) {
    if (isNonEmptyString(str)) {
        return !!str.match(/^[\w]+$/i);
    } else {
        return false;
    }
}

/**
 * Check if alpha numeric with forward slash
 * @param {*} str 
 */
function isAlphaNumericWithFwdSlashUnderscore(str) {
    if (isNonEmptyString(str)) {
        return !!str.match(/^[\w\/]+$/i);
    } else {
        return false;
    }
}

/**
 * Check if alpha numeric with space
 * @param {*} str 
 */
function isAlphaNumericWithSpace(str) {
    if (isNonEmptyString(str)) {
        return !!str.match(/^[a-zA-Z0-9 ]+$/i);
    } else {
        return false;
    }
}

/**
 * Check if alpha numeric with space, dot
 * @param {*} str 
 */
function isAlphaNumericWithSpaceDot(str) {
    if (isNonEmptyString(str)) {
        return !!str.match(/^[a-zA-Z0-9._\- ]+$/i);
    } else {
        return false;
    }
}

/**
 * Check if alpha numeric with dot
 * @param {*} str 
 */
function isAlphaNumericWithDot(str) {
    if (isNonEmptyString(str)) {
        return !!str.match(/^[a-zA-Z0-9.]+$/i);
    } else {
        return false;
    }
}

/**
 * Check if alpha-numeric with hyphen
 * @param {*} str 
 */
function isAlphaNumericWithHyphen(str) {
    if (isNonEmptyString(str)) {
        return !!str.match(/^[a-zA-Z0-9-]+$/i);
    } else {
        return false;
    }
}

function isValidSAPID(str) {
    return isAlphaNumericWithHyphen(str)
}
/**
 * Check if alpha-numeric and of 16 charcters
 * @param {*} str 
 */
function isAlphaNumericWithSixteenBytes(str) {
    if (isNonEmptyString(str) && str.length === 32) {
        return !!str.match(/^[a-zA-Z0-9_]+$/i);
    } else {
        return false;
    }
}

/**
 * Check if alpha numeric with dot, underscore
 * @param {*} str 
 */
function isAlphaNumericWithDotUnderscore(str) {
    if (isNonEmptyString(str)) {
        return !!str.match(/^[\w.]+$/i);
    } else {
        return false;
    }
}

/**
 * Check if alpha numeric with space, underscore
 * @param {*} str 
 */
function isAlphaNumericWithSpaceUnderscore(str) {
    if (isNonEmptyString(str)) {
        return !!str.match(/^[\w ]+$/i);
    } else {
        return false;
    }
}


/**
 * Check if alpha numeric with space, dot, underscore
 * @param {*} str 
 */
function isAlphaNumericWithSpaceDotUnderscore(str) {
    if (isNonEmptyString(str)) {
        return !!str.match(/^[\w. ]+$/i);
    } else {
        return false;
    }
}
/**
 * Check if alpha numeric with special characters
 * @param {*} str 
 */
function isAlphaNumericWithSpecial(str) {
    if (typeof str === 'string') {
        return !!str.match(/^[\w !@#$%^&*(),."':{}\\[\]\/\-]+$/i);
    } else {
        return false;
    }
}

/**
 * Check if string
 * @param {*} value 
 */
function isString(value) {
    if ((typeof value === 'string' || value instanceof String) && value != null && value != undefined && value != "null" && value != "undefined") {
        return true;
    } else {
        return false;
    }
}

/**
 * Check if non empty string
 * @param {*} value 
 */
function isNonEmptyString(value) {
    if (value && isString(value) && value.trim() != "") {
        return true;
    } else {
        return false;
    }
}

/**
 * Check if two strings are equal
 * @param {*} value 
 */
function isEqualStrings(str1, str2) {
    if (isString(str1) && isString(str2) && (str1 === str2)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Check if two strings are equal with case insensitive
 * @param {*} value 
 */
function isEqualStringsIgnoreCase(str1, str2) {
    if (isString(str1) && isString(str2) && (str1.toLowerCase() === str2.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

/**
 * Check if Boolean
 * @param {*} value 
 */
function isBoolean(value) {
    if (typeof value === 'boolean' || value instanceof Boolean) {
        return true;
    } else {
        return false;
    }
}

/**
 * Check if Boolean string
 * @param {*} value 
 */
function isBooleanString(value) {
    if (isNonEmptyString(value) && (value == ConstantUtil.STRING.TRUE || value == ConstantUtil.STRING.FALSE)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Check if non-empty object
 * @param {*} obj 
 */
function isNonEmptyObject(obj) {
    if (obj && Object.keys(obj).length > 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Check if non-empty array
 * @param {*} arr 
 */
function isNonEmptyArray(arr) {
    if (arr && Array.isArray(arr) && arr.length > 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Check if non-empty set
 * @param {*} val 
 */
function isNonEmptySet(val) {
    if (val && val instanceof Set && val.size > 0) {
        return true;
    } else {
        return false;
    }
}


/**
 * Check if valid phone country code
 * @param {*} str 
 */
function isValidPhoneCountryCode(code) {
    if (code) {
        return !!code.match(/^(\+?\d{1,7}|\d{1,8})$/i);
    } else {
        return false;
    }
}

/**
 * Validate phone number
 * @param {*} number 
 */
function isValidPhoneNumber(number = null) {
    if (number) {
        number = number.toString();
        const mobileRegex = /^\d{3,12}$/
        if (number.match(mobileRegex)) { // To support emergency numbers like 100, 108, etc.
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


/**
 * Validate access type
 * @param {*} accessType 
 */
function isValidAccessType(accessType) {
    return (accessType === ConstantUtil.ROUTE.STATE.IN || accessType === ConstantUtil.ROUTE.STATE.OUT) ? true : false;
}



/**
 * Validate setting value type
 * @param {*} valueType 
 */
function isValidSettingValueType(valueType) {
    return (valueType == ConstantUtil.SETTING.VALUE.TYPE.STRING ||
        valueType == ConstantUtil.SETTING.VALUE.TYPE.INT ||
        valueType == ConstantUtil.SETTING.VALUE.TYPE.FLOAT ||
        valueType == ConstantUtil.SETTING.VALUE.TYPE.BOOLEAN ||
        valueType == ConstantUtil.SETTING.VALUE.TYPE.JSON ||
        valueType == ConstantUtil.SETTING.VALUE.TYPE.STRING_CONSTANT ||
        valueType == ConstantUtil.SETTING.VALUE.TYPE.LIST_OF_STRING ||
        valueType == ConstantUtil.SETTING.VALUE.TYPE.LIST_OF_JSON) ? true : false;
}

/**
 * Check if valid route type
 * @param {*} routeType 
 */
function isValidRouteType(routeType) {
    return (routeType == ConstantUtil.ROUTE.TYPE.ROUTE) ? true : false;
}

/**
 * Validate geofence status
 * @param {*} geofenceStatus 
 */
function isValidRouteStatus(routeStatus) {
    return (routeStatus == ConstantUtil.ROUTE.STATUS.ACTIVE ||
        routeStatus == ConstantUtil.ROUTE.STATUS.INACTIVE ||
        routeStatus == ConstantUtil.ROUTE.STATUS.DELETED) ? true : false;
}

/**
 * Validate route state
 * @param {*} state 
 */
function isValidRouteState(state) {
    if (isNonEmptyString(state)) {
        return (state.toLowerCase() == ConstantUtil.ROUTE.STATE.UNKNOWN ||
            state.toLowerCase() == ConstantUtil.ROUTE.STATE.START ||
            state.toLowerCase() == ConstantUtil.ROUTE.STATE.END ||
            state.toLowerCase() == ConstantUtil.ROUTE.STATE.DEVIATION ||
            state.toLowerCase() == ConstantUtil.ROUTE.STATE.RE_ENTRY ||
            state.toLowerCase() == ConstantUtil.ROUTE.STATE.EXIT) ? true : false;
    } else {
        return false;
    }
}

/**
 * Validate route access
 * @param {*} access 
 */
function isValidRouteAccess(access) {
    return (access == ConstantUtil.ROUTE.ACCESS_LEVEL.RESTRICTED ||
        access == ConstantUtil.ROUTE.ACCESS_LEVEL.AUTHORIZED ||
        access == ConstantUtil.ROUTE.ACCESS_LEVEL.UNAUTHORIZED) ? true : false;
}

/**
 * Validate route checkpoint type
 * @param {*} routeCheckpointType 
 */
function isValidRouteCheckpointType(routeCheckpointType) {
    return (routeCheckpointType == ConstantUtil.ROUTE.CHECKPOINT.TYPE.CIRCULAR ||
        routeCheckpointType == ConstantUtil.ROUTE.CHECKPOINT.TYPE.POLYGONAL) ? true : false;
}

/**
 * Validate geofence type
 * @param {*} geofenceType 
 */
function isValidGeofenceType(geofenceType) {
    return (geofenceType == ConstantUtil.GEOFENCE.TYPE.CIRCULAR ||
        geofenceType == ConstantUtil.GEOFENCE.TYPE.POLYGONAL) ? true : false;
}

/**
 * Validate geofence status
 * @param {*} geofenceStatus 
 */
function isValidGeofenceStatus(geofenceStatus) {
    return (geofenceStatus == ConstantUtil.GEOFENCE.STATUS.ACTIVE ||
        geofenceStatus == ConstantUtil.GEOFENCE.STATUS.INACTIVE ||
        geofenceStatus == ConstantUtil.GEOFENCE.STATUS.DELETED) ? true : false;
}


/**
 * Check if valid timezone
 * @param {*} str 
 */
function isValidTimezone(str) {
    // Initialize
    let isValid = false;

    if (isNonEmptyString(str)) {
        // Format +05:30
        isValid = !!str.match(/^([\+\-]{1}(\d{1,2}){1}:{1}(\d{2}){1})+$/i);
        if (!isValid) {
            // Format 'Europe/Isle_of_Man'
            isValid = !!str.match(/^([a-zA-Z]+(\/){1}[a-zA-Z_]+)+$/i);
        }
    }

    return isValid;
}

/**
 * Check if valid device id
 * @param {*} str 
 */
function isValidDeviceId(str) {
    // Initialize
    let isValid = false;

    if (isNonEmptyString(str)) {
        // Format A1:B2:C3:D4:E5:F6
        isValid = isValidMac(str);
        if (!isValid) {
            // Format 111111111111110
            isValid = isValidImei(str);
            if (!isValid) {
                // Format 111AABB9348cc
                isValid = isValidSerial(str);
                if (!isValid) {
                    // Format 9909099090
                    isValid = isValidPhoneNumber(str);
                    if (!isValid) {
                        // Format 111111111111110_23
                        isValid = isValidMeterMac(str);
                        if (!isValid) {
                            // Format 111111111111110_23
                            isValid = isValidSAPID(str);
                        }
                    }
                }
            }
        }
    }

    return isValid;
}

/**
 * Check if valid MAC
 * @param {*} str 
 */
// function isValidMac(str) {
//     // Initialize
//     if (isNonEmptyString(str)) {
//         // Format A1:B2:C3:D4:E5:F6
//         return !!str.match(/^[0-9a-z]{1,2}([:])(?:[0-9a-z]{1,2}\1){4}[0-9a-z]{1,2}$/i);
//     }

//     return false;
// }

/**
 * Check if valid IMEI
 * @param {*} str 
 */
// function isValidImei(str) {
//     // Initialize
//     if (isNonEmptyString(str)) {
//         // Format 111111111111110
//         return !!str.match(/^([0-9a-zA-z_\-]{4,30})+$/);
//     }

//     return false;
// }

/**
 * Check if valid serial
 * @param {*} str 
 */
// function isValidSerial(str) {
//     // Initialize
//     if (isNonEmptyString(str)) {
//         // Format 1111111111111ab
//         return isAlphaNumeric(str);
//     }

//     return false;
// }


/**
 * Check if valid stos notification entity
 * @param {*} entity 
 */
function isValidStosNotificationEntity(entity) {
    return (entity == ConstantUtil.STOS.NOTIFICATION.REQUEST.HEADER.ENTITY.B2B_DOMAIN_REGISTRATION ||
        entity == ConstantUtil.STOS.NOTIFICATION.REQUEST.HEADER.ENTITY.B2B_DOMAIN_DEVICE_REGISTRATION ||
        entity == ConstantUtil.STOS.NOTIFICATION.REQUEST.HEADER.ENTITY.B2C_CUSTOMER_REGISTRATION ||
        entity == ConstantUtil.STOS.NOTIFICATION.REQUEST.HEADER.ENTITY.B2C_CUSTOMER_DEVICE_REGISTRATION ||
        entity == ConstantUtil.STOS.NOTIFICATION.REQUEST.HEADER.ENTITY.CUSTOMER_CREDENTIAL) ? true : false;
}

/**
 * Check if valid stos notification operation
 * @param {*} operation 
 */
function isValidStosNotificationOperation(operation) {
    return (operation == ConstantUtil.STOS.NOTIFICATION.REQUEST.HEADER.OPERATION.CREATE ||
        operation == ConstantUtil.STOS.NOTIFICATION.REQUEST.HEADER.OPERATION.READ ||
        operation == ConstantUtil.STOS.NOTIFICATION.REQUEST.HEADER.OPERATION.UPDATE ||
        operation == ConstantUtil.STOS.NOTIFICATION.REQUEST.HEADER.OPERATION.DELETE) ? true : false;
}

/**
 * Check if valid action
 * @param {*} action 
 */
function isValidAction(action) {
    return (action == ConstantUtil.ACTION.CREATE ||
        action == ConstantUtil.ACTION.READ ||
        action == ConstantUtil.ACTION.UPDATE ||
        action == ConstantUtil.ACTION.DELETE) ? true : false;
}

/**
 * Check if valid email
 * @param {*} email 
 */
function isValidEmail(email = null) {
    const MAX_LENGTH = 50;
    if (typeof email !== null && isNonEmptyString(email) && email.length < MAX_LENGTH) {
        return !!email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/i);
    } else {
        return false;
    }
}



/**
 * Check if valid user status
 * @param {*} status 
 */
function isValidUserStatus(status) {
    return (status == ConstantUtil.USER.STATUS.ACTIVE ||
        status == ConstantUtil.USER.STATUS.EMAIL_NOT_VERIFIED ||
        status == ConstantUtil.USER.STATUS.INSTOCK ||
        status == ConstantUtil.USER.STATUS.LOCKED ||
        status == ConstantUtil.USER.STATUS.MARKED_FOR_DELETION ||
        status == ConstantUtil.USER.STATUS.NO_REFERNCE ||
        status == ConstantUtil.USER.STATUS.UNLOCK ||
        status == ConstantUtil.USER.STATUS.UNMARKED_FROM_DELETION
    ) ? true : false;
}

/**
 * Check if valid user type
 * @param {*} type 
 */
function isValidUserType(type) {
    return (type == ConstantUtil.USER.TYPE.SUPERVISOR ||
        type == ConstantUtil.USER.TYPE.SERVER ||
        type == ConstantUtil.USER.TYPE.STUDENT ||
        type == ConstantUtil.USER.TYPE.DEVICE ||
        type == ConstantUtil.USER.TYPE.USER
    ) ? true : false;
}

/**
 * Check if valid gender
 * @param {*} gender 
 */
function isValidGender(gender) {
    if (isNonEmptyString(gender)) {
        return (gender.toLowerCase() == ConstantUtil.GENDER.MALE ||
            gender.toLowerCase() == ConstantUtil.GENDER.FEMALE ||
            gender.toLowerCase() == ConstantUtil.GENDER.OTHERS) ? true : false;
    } else {
        return false;
    }
}

/**
 * Check if valid json
 * @param {*} json 
 */
function isValidJson(json) {
    try {
        if (isValidObject(json)) {
            JSON.parse(JSON.stringify(json));
        } else {
            JSON.parse(json);
        }
    } catch (error) {
        return false;
    }
    return true;
}

/**
 * Check if valid password
 * @param {*} password 
 */
function isValidPassword(password) {
    try {
        if (isNonEmptyString(password)) {
            // Initialize
            let isMinLength = false;
            let isMaxLength = false;
            let hasUpperCase = false;
            let hasLowerCase = false;
            let hasNumber = false;
            let hasSpecialChar = false;

            isMinLength = (password.length >= 8) ? true : false;
            isMaxLength = (password.length <= 16) ? true : false;

            // Check for atleast one
            hasUpperCase = /[A-Z]/.test(password);
            hasLowerCase = /[a-z]/.test(password);
            hasNumber = /\d/.test(password);
            hasSpecialChar = /[!@#$%^&*()_\-+=]+/.test(password);

            // Check if any invalid special character
            // hasSpecialChar = !!password.match(/^[\w!@#$%^&*()_\-+=]+$/i);

            if (isMinLength && isMaxLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

/**
 * Check if valid log type
 * @param {*} type 
 */
function isValidLogType(type) {
    return (type == ConstantUtil.LOG.TYPE.API) ? true : false;
}

/**
 * Check if valid application code
 * @param {*} code 
 */
function isValidApplicationCode(code) {
    return (code == ConstantUtil.APPLICATION.BOOTSTRAP_SERVER.CODE ||
        code == ConstantUtil.APPLICATION.CACHE.CODE ||
        code == ConstantUtil.APPLICATION.UGS_SERVER.CODE ||
        code == ConstantUtil.APPLICATION.JOB.ADD_DAT_TO_DEVICE.CODE ||
        code == ConstantUtil.APPLICATION.JOB.ADD_DAT_TO_OTHER_DAT_USER.CODE ||
        code == ConstantUtil.APPLICATION.JOB.ASSIGN_DAT_TO_DEVICE.CODE ||
        code == ConstantUtil.APPLICATION.JOB.ASSOCIATE_USER_AND_PERSON_TRACKER_DEVICE.CODE ||
        code == ConstantUtil.APPLICATION.JOB.ASSOCIATE_USER_AND_VEHICLE_TRACKER_DEVICE.CODE ||
        code == ConstantUtil.APPLICATION.JOB.DELETE_DAT.CODE ||
        code == ConstantUtil.APPLICATION.JOB.DEVICE_REPORT.CODE ||
        code == ConstantUtil.APPLICATION.JOB.DEVICE_USAGE_REPORT.CODE ||
        code == ConstantUtil.APPLICATION.JOB.DEVICE_USAGE_REPORT_BY_DAT.CODE ||
        code == ConstantUtil.APPLICATION.JOB.EDIT_DAT.CODE ||
        code == ConstantUtil.APPLICATION.JOB.MOVE_DAT_OF_DEVICE.CODE ||
        code == ConstantUtil.APPLICATION.JOB.REMOVE_DAT_FROM_DEVICE.CODE ||
        code == ConstantUtil.APPLICATION.JOB.TRIGGER_DEVICE_CMD.CODE ||
        code == ConstantUtil.APPLICATION.JOB.DOWNLOAD.CODE ||
        code == ConstantUtil.APPLICATION.MESSAGE_PROCESSOR.CODE ||
        code == ConstantUtil.APPLICATION.MESSAGE_PROCESSOR.AWS_IOT_EVENT.CODE ||
        code == ConstantUtil.APPLICATION.MESSAGE_PROCESSOR.KAFKA_DEVICE_EVENT.CODE ||
        code == ConstantUtil.APPLICATION.MESSAGE_PROCESSOR.KAFKA_FOTA.CODE ||
        code == ConstantUtil.APPLICATION.MESSAGE_PROCESSOR.KAFKA_EVENT.CODE ||
        code == ConstantUtil.APPLICATION.MESSAGE_PROCESSOR.STOS_NTFY_B2B_DOMAIN.CODE ||
        code == ConstantUtil.APPLICATION.MESSAGE_PROCESSOR.STOS_NTFY_B2B_DOMAIN_DEVICE.CODE ||
        code == ConstantUtil.APPLICATION.MESSAGE_PROCESSOR.STOS_NTFY_B2C_CUSTOMER.CODE ||
        code == ConstantUtil.APPLICATION.MESSAGE_PROCESSOR.STOS_NTFY_B2C_CUSTOMER_DEVICE.CODE ||
        code == ConstantUtil.APPLICATION.MESSAGE_PROCESSOR.STOS_NTFY_CUSTOMER_CREDENTIAL.CODE ||
        code == ConstantUtil.APPLICATION.MESSAGE_PROCESSOR.AUDIT_LOG.CODE ||
        code == ConstantUtil.APPLICATION.MESSAGE_PROCESSOR.ALERT.CODE ||
        code == ConstantUtil.APPLICATION.MESSAGE_PROCESSOR.KAFKA_REVERSE_EVENT.CODE ||
        code == ConstantUtil.APPLICATION.MESSAGE_PROCESSOR.KAFKA_DBEM_DATA.CODE ||
        code == ConstantUtil.APPLICATION.FILE_SERVER.CODE ||
        code == ConstantUtil.APPLICATION.SMPP_SERVER.CODE ||
        code == ConstantUtil.APPLICATION.AUDIT_SERVER.CODE ||
        code == ConstantUtil.APPLICATION.NOTIFICATION_SERVER.CODE ||
        code == ConstantUtil.APPLICATION.ALERT_SERVER.CODE) ? true : false;
}

/**
 * Check if valid alert type
 * @param {*} type 
 */
function isValidAlertType(type) {
    return (type === ConstantUtil.ALERT.TYPE.SMS ||
        type === ConstantUtil.ALERT.TYPE.EMAIL ||
        type === ConstantUtil.ALERT.TYPE.FCM ||
        type === ConstantUtil.ALERT.TYPE.UI) ? true : false;
}

/**
 * Check if valid task status
 * @param {*} priority
 */
function isValidTaskStatus(status) {
    return (
        // status === ConstantUtil.ACTIONABLE_TASKS.STATUS.NEW
        status === ConstantUtil.APPLICATION.ACTIONABLE_TASKS.STATUS.OPEN
        || status === ConstantUtil.APPLICATION.ACTIONABLE_TASKS.STATUS.IN_PROGRESS
        || status === ConstantUtil.APPLICATION.ACTIONABLE_TASKS.STATUS.CLOSED
        // || status === ConstantUtil.ACTIONABLE_TASKS.STATUS.COMPLETED
        // || status === ConstantUtil.ACTIONABLE_TASKS.STATUS.PENDING
    ) ? true : false;
}

/**
 * Check if valid task status
 * @param {*} priority
 */
function isValidTaskType(status) {
    return (
        // status === ConstantUtil.ACTIONABLE_TASKS.STATUS.NEW
        status === ConstantUtil.APPLICATION.ACTIONABLE_TASKS.TYPE.ASSET
        || status === ConstantUtil.APPLICATION.ACTIONABLE_TASKS.TYPE.NODE
    ) ? true : false;
}

/**
 * Check if valid task status
 * @param {*} priority
 */
function isValidTaskCriticality(status) {
    return (status === ConstantUtil.APPLICATION.ACTIONABLE_TASKS.CRITICALITY.HIGH
        || status === ConstantUtil.APPLICATION.ACTIONABLE_TASKS.CRITICALITY.MEDIUM
        || status === ConstantUtil.APPLICATION.ACTIONABLE_TASKS.CRITICALITY.LOW) ? true : false;
}

/**
 * Check if valid alert priority
 * @param {*} priority 
 */
function isValidAlertPriority(priority) {
    return isIntegerAndPositive(priority);
}

/**
 * Check if valid alert status
 * @param {*} priority 
 */
function isValidAlertStatus(status) {
    return (status === ConstantUtil.ALERT.STATUS.ACKNOWLEDGED ||
        status === ConstantUtil.ALERT.STATUS.UNACKNOWLEDGED ||
        status === ConstantUtil.ALERT.STATUS.CLOSED ||
        status === ConstantUtil.ALERT.STATUS.COMPLETED ||
        status === ConstantUtil.ALERT.STATUS.IN_PROGRESS ||
        status === ConstantUtil.ALERT.STATUS.OPEN ||
        status === ConstantUtil.ALERT.STATUS.PENDING) ? true : false;
}

/**
 * Validate latitude and longitude
 * @param {*} latLng 
 */
function isValidLatLng(latLng) {
    try {
        if (latLng && isNonEmptyObject(latLng)) {
            if (latLng.lat && latLng.lng) {
                let isLat = false;
                let isLng = false;
                isLat = /^([-+]?)([\d]{1,2})(((\.)(\d+)))(\s*)$/.test(latLng.lat);
                isLng = /^(([-+]?)([\d]{1,3})((\.)(\d+))?)$/.test(latLng.lng);
                if (isLat == true && isLng == true) {
                    return true;
                } else {
                    return false;
                }
            } else if (latLng.latitude && latLng.longitude) {
                let isLat = false;
                let isLng = false;
                isLat = /^([-+]?)([\d]{1,2})(((\.)(\d+)))(\s*)$/.test(latLng.latitude);
                isLng = /^(([-+]?)([\d]{1,3})((\.)(\d+))?)$/.test(latLng.longitude);
                if (isLat == true && isLng == true) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

/**
 * Check if valid file type
 * @param {*} type 
 */
function isValidFileType(type) {
    return (type == ConstantUtil.FILE.TYPE.AUDIO ||
        type == ConstantUtil.FILE.TYPE.VIDEO ||
        type == ConstantUtil.FILE.TYPE.CONTACT ||
        type == ConstantUtil.FILE.TYPE.IMAGE) ? true : false;
}


/**
 * Check if valid mime type
 * @param {*} type 
 */
function isValidMimeType(type) {
    return (
        type == ConstantUtil.FILE.MIME_TYPE.APPLICATION.OCTET_STREAM ||
        type == ConstantUtil.FILE.MIME_TYPE.APPLICATION.OGG ||
        type == ConstantUtil.FILE.MIME_TYPE.APPLICATION.JSON ||
        type == ConstantUtil.FILE.MIME_TYPE.APPLICATION.VND_MS_EXCEL ||
        type == ConstantUtil.FILE.MIME_TYPE.APPLICATION.ZIP ||
        type == ConstantUtil.FILE.MIME_TYPE.AUDIO.WAVE ||
        type == ConstantUtil.FILE.MIME_TYPE.AUDIO.WAV ||
        type == ConstantUtil.FILE.MIME_TYPE.AUDIO.OGG ||
        type == ConstantUtil.FILE.MIME_TYPE.AUDIO.MP3 ||
        type == ConstantUtil.FILE.MIME_TYPE.AUDIO.MP4 ||
        type == ConstantUtil.FILE.MIME_TYPE.AUDIO.MPEG ||
        type == ConstantUtil.FILE.MIME_TYPE.AUDIO.X_AAC ||
        type == ConstantUtil.FILE.MIME_TYPE.AUDIO.AAC ||
        type == ConstantUtil.FILE.MIME_TYPE.AUDIO.AMR ||
        type == ConstantUtil.FILE.MIME_TYPE.IMAGE.JPEG ||
        type == ConstantUtil.FILE.MIME_TYPE.IMAGE.PNG ||
        type == ConstantUtil.FILE.MIME_TYPE.IMAGE.GIF ||
        type == ConstantUtil.FILE.MIME_TYPE.TEXT.CSV ||
        type == ConstantUtil.FILE.MIME_TYPE.VIDEO.WAVE ||
        type == ConstantUtil.FILE.MIME_TYPE.VIDEO.WAV ||
        type == ConstantUtil.FILE.MIME_TYPE.VIDEO.OGG ||
        type == ConstantUtil.FILE.MIME_TYPE.VIDEO.MP4
    ) ? true : false;
}

/**
 * Check if valid mime type for Image Upload
 * @param {*} type 
 */
function isValidFrMimeType(type) {
    return (type == ConstantUtil.FILE.MIME_TYPE.IMAGE.JPEG ||
        type == ConstantUtil.FILE.MIME_TYPE.IMAGE.PNG
    ) ? true : false;
}

/**
 * Check if success response
 * @param {*} response 
 */
function isSuccessResponse(response) {
    if (isNonEmptyObject(response) &&
        (response.code == ConstantUtil.HTTP.STATUS.OK.CODE ||
            response.status == ConstantUtil.HTTP.STATUS.OK.CODE ||
            response.sts == ConstantUtil.HTTP.STATUS.OK.CODE)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Check if success response with non empty data
 * @param {*} response 
 */
function isSuccessResponseAndNonEmptyData(response) {
    if (isSuccessResponse(response) && isNonEmptyObject(response.data)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Check if success response with non empty data array
 * @param {*} response 
 */
function isSuccessResponseAndNonEmptyDataArray(response) {
    if (isSuccessResponse(response) && isNonEmptyArray(response.data)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Check if valid alert subscription frequency
 * @param {String} frequency
 */
function isValidAlertSubscriptionFrequency(frequency) {
    if (isNonEmptyString(frequency)) {
        return (frequency == ConstantUtil.ALERT.SUBSCRIPTION.FREQUENCY.OCCASIONAL ||
            frequency == ConstantUtil.ALERT.SUBSCRIPTION.FREQUENCY.DAILY) ? true : false;
    } else {
        return false;
    }
}

/**
 * Verify dob
 * @param {*} dob 
 */
function isValidDob(dob) {
    if (isNonEmptyString(dob)) {
        return !!dob.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    } else {
        return false;
    }
}

/**
 * Verify event type
 * @param {*} type 
 */
function isValidEventType(type) {
    if (isNonEmptyString(type)) {
        return (type == ConstantUtil.EVENT.SOS ||
            type == ConstantUtil.EVENT.SAFEZONE_ENTRY ||
            type == ConstantUtil.EVENT.SAFEZONE_EXIT ||
            type == ConstantUtil.EVENT.DEVICE_GEOFENCE ||
            type == ConstantUtil.EVENT.BATTERY_STATUS ||
            type == ConstantUtil.EVENT.BATTERY_ALERT ||
            type == ConstantUtil.EVENT.TAMPER_ALERT ||
            type == ConstantUtil.EVENT.BATTERY_CONNECT ||
            type == ConstantUtil.EVENT.BATTERY_DISCONNECT ||
            type == ConstantUtil.EVENT.THRESHOLD_BREACH ||
            type == ConstantUtil.EVENT.MOVEMENT_ALERT ||
            type == ConstantUtil.EVENT.INCIDENT ||
            type == ConstantUtil.EVENT.OVER_SPEED ||
            type == ConstantUtil.EVENT.OVER_STOP ||
            type == ConstantUtil.EVENT.LOCATION ||
            type == ConstantUtil.EVENT.WEARING ||
            type == ConstantUtil.EVENT.NOT_WEARING ||
            type == ConstantUtil.EVENT.CLASS_MODE ||
            type == ConstantUtil.EVENT.STATUS ||
            type == ConstantUtil.EVENT.ROUTE_ENTRY ||
            type == ConstantUtil.EVENT.ROUTE_EXIT ||
            type == ConstantUtil.EVENT.ROUTE_START ||
            type == ConstantUtil.EVENT.ROUTE_END ||
            type == ConstantUtil.EVENT.ROUTE_EXIT ||
            type == ConstantUtil.EVENT.ROUTE_RE_ENTRY ||
            type == ConstantUtil.EVENT.ROUTE_DEVIATION ||
            type == ConstantUtil.EVENT.ROUTE_CHECKPOINT
        ) ? true : false;
    } else {
        return false;
    }
}

/**
 * Verify if valid UTC timestamp
 * @param {*} value 
 */
function isValidUTCTimestamp(value) {
    try {
        if (isNumericAndPositive(value)) {
            return new Date(value).getTime() > 0;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}


function isValidStringWithLength(str) {
    return (isString(str) && str.length < 200)
}

/**
 * Verify if valid JWT
 * @param {*} token 
 * @param {*} params 
 * @param {*} flags 
 */
function isValidJwt(token, params, flags) {
    try {
        if (isNonEmptyString(token)) {
            if (!flags) {
                flags = {};
            }
            let isValid = false;
            JWT.verify(token, process.env.TOKEN_KEY, (error, decoded) => {
                if (error) {
                    if (flags.isSkipExpiryCheck && error.name == "TokenExpiredError") {
                        isValid = true;
                    } else {
                        isValid = false;
                    }
                } else {
                    isValid = true;
                }
            });
            return isValid;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

/**
 * Verify JWT audience
 * @param {*} audience 
 */
function isValidJwtAudience(audience) {
    return (
        isNonEmptyString(audience) &&
        ConstantUtil.JWT.AUDIENCE[audience.toUpperCase()] != undefined
    ) ? true : false;
}

/**
 * Verify token type
 * @param {*} type 
 */
function isValidTokenType(type) {
    return (
        isNonEmptyString(type) &&
        ConstantUtil.TOKEN.TYPE[type.toUpperCase()] != undefined
    ) ? true : false;
}

/**
 * Verify if valid message type
 * @param {*} type 
 */
function isValidMessageType(type) {
    if (isNonEmptyString(type)) {
        return (ConstantUtil.MESSAGE.TYPE.TEXT == type ||
            ConstantUtil.MESSAGE.TYPE.AUDIO) ? true : false;
    } else {
        return false;
    }
}

/**
 * Verify if valid object
 * @param {*} value 
 */
function isValidObject(value) {
    if (typeof value === 'object' || value instanceof Object) {
        return true;
    } else {
        return false;
    }
}

/**
 * Check if valid month
 * @param {*} str 
 */
function isValidMonth(str) {
    let month = null;

    if (typeof str === "number") {
        if (month < 0 || month > 11) return false;
        return true;
    }
    month = getMonthInNumber(str);

    if (month < 0 || month > 11) return false;
    else return true;
}

function getMonthInNumber(str) {
    let monthMap = new Map();
    monthMap.set("JANUARY", 0);
    monthMap.set("FEBRUARY", 1);
    monthMap.set("MARCH", 2);
    monthMap.set("APRIL", 3);
    monthMap.set("APRIL", 3);
    monthMap.set("JUNE", 5);
    monthMap.set("JULY", 6);
    monthMap.set("AUGUST", 7);
    monthMap.set("SEPTEMBER", 8);
    monthMap.set("OCTOBER", 9);
    monthMap.set("NOVEMBER", 10);
    monthMap.set("DECEMBER", 11);

    if (monthMap.get(str.toUpperCase()) != undefined) return monthMap.get(str.toUpperCase());
    else if (isIntegerAndPositive(str)) return parseInt(str);
    else return -1;
}

/**
 * Check if valid year
 * @param {*} str 
 */
function isValidYear(str) {
    if (str.length < 4) return false;
    else if (!isIntegerAndPositive(str)) return false;
    else if (parseInt(str) > new Date().getFullYear()) return false;
    else return true;
}

/**
 * Check if valid year
 * @param {*} str 
 */

function isNonFutureMonth(month, year) {
    if (!isValidMonth(month) || !isValidYear(year)) return false;
    const currYear = new Date().getFullYear();
    const currMonth = new Date().getMonth();
    const passedYear = parseInt(year);
    const passedMonth = getMonthInNumber(month);
    if (passedYear > currYear) return false;
    if ((passedYear == currYear) && (passedMonth >= currMonth)) return false;
    else return true;
}

function isMonth1BeforeMonth2(month1, year1, month2, year2) {
    if (isValidMonth(month1) && isValidMonth(month2) && isValidYear(year1) && isValidYear(year2)) {
        month1 = parseInt(month1);
        month2 = parseInt(month2);
        year1 = parseInt(year1);
        year2 = parseInt(year2);

        if (year1 < year2) return true;
        if (year1 == year2 && month1 <= month2) return true;
        else return false;
    } else {
        logger(
            loglevels.WARN, ConstantUtil.APPLICATION.UTIL.CODE, Path.basename(__filename),
            "Invalid value of year/month."
        );
        return false;
    }
}

function isCurrentOrFutureYear(year) {
    if (year.length < 4) return false;
    else if (parseInt(year) >= new Date().getFullYear()) return true;
    else return false;
}

function multerErrorMessage(error) {
    switch (error.code) {
        case 'LIMIT_PART_COUNT':
            return '';
        case 'LIMIT_FILE_SIZE':
            return 'Uploaded file size is exceeding the file size limit.';
        case 'LIMIT_FILE_COUNT':
            return '';
        case 'LIMIT_FIELD_KEY':
            return '';
        case 'LIMIT_FIELD_VALUE':
            return '';
        case 'LIMIT_FIELD_COUNT':
            return '';
        case 'LIMIT_UNEXPECTED_FILE':
            return '';
        default:
            return `File upload error with error code: ${error.message}`;
    };
}

function mergeArraysWithoutDuplicates(...arrays) {
    let arrayNumber = arrays.length;
    let merged = [];
    for (let i = 0; i < arrayNumber; i++) {
        if (isNonEmptyArray(arrays[i])) {
            for (let j = 0; j < arrays[i].length; j++) {
                if (!merged.includes(JSON.stringify(arrays[i][j]))) {
                    merged.push(JSON.stringify(arrays[i][j]));
                }
            }
        }
    }
    merged.forEach((element, index) => {
        merged[index] = JSON.parse(element);
    });

    return merged;
}

function getUTCTime(timestamp) {
    let d = new Date(timestamp)
    return d.getTime() + (5.5 * 60 * 60 * 1000)
}


function dcToHhMmFormat(value) {
    let val = value + "";
    let valArray = val.split(".");
    let hrs = valArray[0];
    let mins = Array.from(valArray[1])[0];
    if (mins == 0) {
        return hrs + ":00:00";
    } else if (mins == 1) {
        return `${hrs}:06:00`;
    } else {
        let res = (mins / 10) * 60;
        return hrs + ":" + res + ":00";
    }
}

function dnToHhMmFormat(value) {
    if (value > 0) {
        let val = value + "";
        let valArray = val.split(".");
        let hrs = valArray[0];
        if (hrs < 10) {
            hrs = '0' + hrs;
        }
        let mins = Array.from(valArray[1])[0];
        if (mins == 0) {
            return hrs + ":00";
        } else if (mins == 1) {
            return `${hrs}:06`;
        } else {
            let res = (mins / 10) * 60;
            return hrs + ":" + res;
        }
    }
    else {
        return "00:00";
    }
}
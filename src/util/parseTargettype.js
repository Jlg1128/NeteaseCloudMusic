function parsePath(targetType) {
    switch (targetType) {
        case 1004:
            return '/mv/'
        case 10:
            return '/mv/'
        case 3000:
            return ''
        case 1:
            return '/song/'
        default:
            return '/song/'
    }
}
module.exports=parsePath
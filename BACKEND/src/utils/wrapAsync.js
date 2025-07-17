export default function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(err => {
            console.error('Caught async error:', err);
            next(err);
        });
    };
};

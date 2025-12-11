//Generic Result Type
type Success<T> = {
    ok: true;
    data: T;
};

type Failure<E> = {
    ok: false;
    error: E;
};

type Result<T, E> = Success<T> | Failure<E>;

//Helper function: success 
function success<T>(data: T): Success<T> {
    return {
        ok: true,
        data,
    };
}

//Helper function: failure
function failure<E>(error: E): Failure<E> {
    return {
        ok: false,
        error,
    };
}
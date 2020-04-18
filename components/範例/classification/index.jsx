import * as React from 'react';
import classNames from 'classnames';
import './css.scss';

const Module = () => {
    const className = 'qwe';

    const M = [1, 2, 3, 4, '5', 6, 7, 8, 9];

    const S = [
        [1, 4, 7],
        [2, '5', 8],
        [3, 6, 9, 80],
    ];

    const _classification = (M, S) => {
        const A = new Array(S.length).fill([]);

        M.forEach(M_element => {
            const setIndex = S.indexOf(
                //選擇find原因是要點到為止
                S.find(S_element => {
                    return S_element.includes(M_element);
                }),
            );

            if (setIndex !== -1) {
                //選擇concat原因是不想影響原來數組
                A[setIndex] = A[setIndex].concat(M_element);
            }
        });

        console.log(A);
        return A;
    };

    return <div className={classNames(className)}>{_classification(M, S)}</div>;
};

export default Module;

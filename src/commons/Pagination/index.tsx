import React from "react";

interface pagination {
    _page: number,
    _limit: number,
    _totalRows: number;
}
interface Props {
    pagination : pagination,
    onPageChange: (newPage: number) => void;
}
const Index: React.FunctionComponent<Props> = ({ pagination, onPageChange }) => {
    const {_page, _limit, _totalRows} = pagination ;
    const totalPage = Math.ceil(_totalRows/_limit)
    const handlePageChange = (newPage: number) => {
        onPageChange(newPage);
    }
    return (
        <div>
            <button
                disabled={_page<=1}
                onClick={() => handlePageChange(_page-1)}
            >Prev</button>
            <button
                disabled={_page>=totalPage}
                onClick={() => handlePageChange(_page+1)}
            >Next</button>
        </div>
    );
}

export default Index;
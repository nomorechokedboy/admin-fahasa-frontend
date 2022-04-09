import ProductFormHOC from "@/HOC/ProductFormHOC";

import { memo, useCallback } from "react";

const AddForm = memo(() => {
    const handleSubmit = useCallback(() => {}, []);

    return <ProductFormHOC title="Add product" onSubmit={handleSubmit} />;
});

export default AddForm;

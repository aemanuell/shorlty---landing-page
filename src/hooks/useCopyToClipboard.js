import { useState, useEffect } from 'react';

export function useCopyToClipboard(itemId, textToCopy, copiedItems, setCopiedItems) {
    const [isCopied, setIsCopied] = useState(false);

    const copyItem = () => {
        setCopiedItems(copiedItems => [...copiedItems, itemId]);
        navigator.clipboard.writeText(textToCopy);
    };

    useEffect(() => {
        if (copiedItems.includes(itemId)) {
            setIsCopied(true)
        } 
    }, [copiedItems, itemId]);

    return {isCopied, copyItem};

};
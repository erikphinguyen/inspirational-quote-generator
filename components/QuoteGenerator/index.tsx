import React from 'react'

// Material UI Imports
import {Backdrop, Fade, Modal} from '@mui/material'
import { QuoteGeneratorInnerCon, QuoteGeneratorModalCon } from './QuoteGeneratorElements';

interface QuoteGeneratorModalProps {
    open: boolean;
    close: () => void;
    processingQuote: boolean;
    setProcessingQuote: React.Dispatch<React.SetStateAction<boolean>>;
    quoteReceived: String | null;
    setQuoteReceived: React.Dispatch<React.SetStateAction<String | null>>;
}

const style = {

}

function QuoteGeneratorModal({
    open,
    close,
    processingQuote,
    setProcessingQuote,
    quoteReceived,
    setQuoteReceived,
}: QuoteGeneratorModalProps) {
  return (
    <Modal
        id="QuoteGeneratorModal"
        aria-labelledby="spring-modal-quotegeneratormodal"
        aria-describedby="spring-modal-opens-and-closes-quote-generator"
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
         BackdropProps={{
        timeout: 500,
    }}
    >
        <Fade in={open}>
            <QuoteGeneratorModalCon sx={style}>
                <QuoteGeneratorInnerCon>

                </QuoteGeneratorInnerCon>
            </QuoteGeneratorModalCon>
        </Fade>

    </Modal>
  )
}

export default QuoteGeneratorModal

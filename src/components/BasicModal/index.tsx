import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#333',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IProps {
    title: string,
    subtitle: string,
    handleClose(): void,
    handleOpen(): void,
    open: boolean
}

export default function BasicModal(props: IProps) {

    const { title, subtitle, handleClose, handleOpen, open } = props;

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {subtitle}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
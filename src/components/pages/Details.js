import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 130,
    bgcolor: '#000000',
    borderRadius: '15px',
    p: 4,
};

const DetailJurusan = createContext();

export default function Jurusan() {
    const [Jurusan, setJurusan] = useState([]);
    const [namafakultas, setnamafakultas] = useState('');
    const [list, setlist] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3000/Jurusan",
            headers: {
                accept: "*/*",
            },
        })

            .then((data) => {
                setJurusan(data.data);
            })

            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div style={{ marginTop: 20 }}>

            <center>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900" style={{fontFamily:"Roboto", letterSpacing:"1px"}}>Daftar Jurusan</h1>
            </center>

            <Grid container md={11} spacing={4} style={{ marginTop: "50px", marginLeft: "auto", marginRight: "auto" }}>
                {Jurusan.map((results) => {
                    return (
                        <Grid item key={results.namafakultas} md={3}>
                            <Card>
                                <CardActionArea onClick={() => { setOpen(true); setnamafakultas(results.namafakultas); setlist(results.list) }}>
                                    <CardContent style={{ backgroundColor: '#000000' }}>
                                        <center>
                                        <Typography variant="h6" style={{ color: 'white',
                                    textShadowColor: 'rgba(0, 0, 0, 0)',
                                    textShadowOffset: '{width: -1, height: 1}',
                                    textShadowRadius: '10'
                                   }}>{results.namafakultas}</Typography>
                                        <Typography variant="h6" style={{ color: 'white' }}>Jumlah: {results.jumlahjurusan}​​​​​​ jurusan</Typography>
                                        </center>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
            <DetailJurusan.Provider value={{ namafakultas: namafakultas, list: list }}>
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-Jurusan"
                        aria-describedby="modal-modal-list"
                    >
                        <Detail />
                    </Modal>
                </div>
            </DetailJurusan.Provider>
        </div >
    );
}

function Detail() {
    const info = useContext(DetailJurusan);
    return (
        <Box sx={style}>
            <center>
            <Typography id="modal-modal-Jurusan" variant="h6" style={{ color: 'white' }} component="h2">
                {info.namafakultas}
            </Typography>
            </center>
            <Typography id="modal-modal-list" style={{ color: 'white' }} sx={{ mt: 1 }}>
                {info.list.namajurusan}
            </Typography>
        </Box>
    );
}
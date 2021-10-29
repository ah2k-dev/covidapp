import Button from '@mui/material/Button';
import { HomeIcon } from './Home';
import history from './History';
const btnHome=()=>{
    history.push('./')
}
export default function Graph() {
    return (
        <div>
            <Button variant="outlined" startIcon={<HomeIcon />} onClick={btnHome}>
                Home
            </Button>
            <h1>Graph</h1>
        </div>
    )

}
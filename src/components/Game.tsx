import { caseSize } from "../constants";
import Piece from "./Piece";
import Table from "./Table";


export default function () {
    return <>
        <Table />
        <Piece color="white" type="pawn" position={[-caseSize/4, 0, 0]} />
    </>
}
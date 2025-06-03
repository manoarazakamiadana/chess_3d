import { caseSize } from "../constants"


function range(start: number, end: number, step: number) {
    var table = []
    for (let i=start; i<end; i=i+step) {
        table.push(i)
    }
    return table
}

export default function () {
    return (
        <group>
            {range(-4, 4, 1).map(function (x: number) {
                return range(-4, 4, 1).map(function(y: number) {
                    return (
                        <mesh position={[caseSize*x, -12.5, caseSize*y]} key={x*8+y}>
                            <boxGeometry args={[caseSize, caseSize/3, caseSize]} />
                            <meshLambertMaterial color={((x%2)+(y%2))%2 == 0 ? 0x00000 : 0xffffff} />
                        </mesh>
                    )
                })
            })}
        </group>
    )
}
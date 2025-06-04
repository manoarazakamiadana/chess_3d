import { caseSize } from "../constants"
import { range } from "../utils"

export default function () {
    return (
        <group>
            {range(-4, 4, 1).map(function (x: number) {
                return range(-4, 4, 1).map(function(y: number) {
                    return (
                        <mesh position={[caseSize*x, -caseSize/1.5, caseSize*y]} key={x*8+y}>
                            <boxGeometry args={[caseSize, caseSize/3, caseSize]} />
                            <meshLambertMaterial color={((x%2)+(y%2))%2 == 0 ? 0x00000 : 0xffffff} />
                        </mesh>
                    )
                })
            })}
        </group>
    )
}
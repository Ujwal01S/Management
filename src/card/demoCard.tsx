
import {demo_typeFor} from '../json_data/demo_card.json'

// type demoCardProps = {
//     demoData?:typeof demo_typeFor
// }
interface demoCardProps {
    demoData?:typeof demo_typeFor,
}

export const DemoCard = ({demoData= []}:demoCardProps) => {
  return (
    <div>
        {demoData.map((d) => (
            <div key={d.title} className='flex flex-col border-[1px] w-fit'>
                <p>{d.content}</p>
                <p>{d.title}</p>
            </div>
        ))}
    </div>
  )
}

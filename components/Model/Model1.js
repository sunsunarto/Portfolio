import { useGLTF } from '@react-three/drei'

export default function Model1(props) {

  const { scene } = useGLTF('/models/A220-100.glb')
  return <primitive object={scene} {...props} />
}

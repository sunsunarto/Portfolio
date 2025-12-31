import { useGLTF } from '@react-three/drei'

export default function Model1(props) {

  const { scene } = useGLTF('/models/A319.glb')
  return <primitive object={scene} {...props} />
}

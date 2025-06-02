"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeDModel() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create a blob-like geometry (similar to the reference image)
    const geometry = new THREE.IcosahedronGeometry(2, 4)

    // Create a shiny material
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x111111,
    })

    const blob = new THREE.Mesh(geometry, material)
    scene.add(blob)

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x00ffff, 1, 100)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 100)
    pointLight2.position.set(-5, -5, 5)
    scene.add(pointLight2)

    // Animation
    let frame = 0
    const animate = () => {
      requestAnimationFrame(animate)

      frame += 0.01

      // Rotate the blob
      blob.rotation.x = Math.sin(frame * 0.5) * 0.3
      blob.rotation.y += 0.005

      // Deform the blob slightly
      const positions = geometry.attributes.position
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i)
        const y = positions.getY(i)
        const z = positions.getZ(i)

        const distance = Math.sqrt(x * x + y * y + z * z)
        const normalizedDistance = distance / 2 // Normalize by radius

        const time = frame + normalizedDistance * 2
        const deformation = Math.sin(time) * 0.1

        const newDistance = distance + deformation
        const scale = newDistance / distance

        positions.setX(i, x * scale)
        positions.setY(i, y * scale)
        positions.setZ(i, z * scale)
      }

      positions.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Add interactivity
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1

      pointLight.position.x = mouseX * 5
      pointLight.position.y = mouseY * 5
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0" />
}

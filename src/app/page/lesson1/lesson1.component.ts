import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshLambertMaterial,
  OrthographicCamera,
  PointLight,
  Scene,
  SphereGeometry,
  WebGLRenderer
} from 'three';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit, AfterViewInit {
  @ViewChild('elm', {static: true}) elm: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.elm.nativeElement);
    this.init();
  }


  private init() {
    /**
     * 创建场景对象Scene
     */
    const scene = new Scene();
    /**
     * 创建网格模型
     */
    const geometry = new SphereGeometry(60, 40, 40); // 创建一个球体几何对象
    // const geometry = new BoxGeometry(100, 100, 100); // 创建一个立方体几何对象Geometry
    const material = new MeshLambertMaterial({
      color: 0x0000ff
    }); // 材质对象Material
    const mesh = new Mesh(geometry, material); // 网格模型对象Mesh
    scene.add(mesh); // 网格模型添加到场景中
    /**
     * 光源设置
     */
      // 点光源
    const point = new PointLight(0xffffff);
    point.position.set(400, 200, 300); // 点光源位置
    scene.add(point); // 点光源添加到场景中
    // 环境光
    const ambient = new AmbientLight(0x444444);
    scene.add(ambient);
    // console.log(scene)
    // console.log(scene.children)
    /**
     * 相机设置
     */
    const width = this.elm.nativeElement.clientWidth; // 窗口宽度
    const height = this.elm.nativeElement.clientHeight; // 窗口高度
    const k = width / height; // 窗口宽高比
    const s = 200; // 三维场景显示范围控制系数，系数越大，显示的范围越大
    // 创建相机对象
    const camera = new OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(200, 300, 200); // 设置相机位置
    camera.lookAt(scene.position); // 设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    const renderer = new WebGLRenderer();
    renderer.setSize(width, height); // 设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1); // 设置背景颜色
    this.elm.nativeElement.appendChild(renderer.domElement); // body元素中插入canvas对象
    // 执行渲染操作   指定场景、相机作为参数
    renderer.render(scene, camera);
  }
}

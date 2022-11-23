import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <div>
        

        <body class="antialiased font-sans bg-gray-200">
    <div class="w-full shadow bg-white rounded">
      <div class="border-gray-200 w-full rounded bg-white overflow-x-auto">
        <table class="w-full leading-normal ">
          <thead
            class="text-gray-600 text-xs font-semibold border-gray tracking-wider text-left px-5 py-3 bg-gray-100 hover:cursor-pointer uppercase border-b-2 border-gray-200">
            <tr class="border-b border-gray">
              <th scope="col"
                class="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <div class="inline-block">
                  <div class="filter-asc"
                    style="width: 0px; height: 0px; border-left: 5px solid transparent; border-right: 5px solid transparent; margin-bottom: 1px; border-bottom: 5px solid rgb(204, 204, 204);">
                  </div>
                  <div class="filter-desc"
                    style="width: 0px; height: 0px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid rgb(204, 204, 204); margin-top: 1px;">
                  </div>
                </div>
                Usuario
              </th>
              <th scope="col"
                class="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <div class="inline-block">
                  <div class="filter-asc"
                    style="width: 0px; height: 0px; border-left: 5px solid transparent; border-right: 5px solid transparent; margin-bottom: 1px; border-bottom: 5px solid rgb(204, 204, 204);">
                  </div>
                  <div class="filter-desc"
                    style="width: 0px; height: 0px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid rgb(204, 204, 204); margin-top: 1px;">
                  </div>
                </div>
                Email
              </th>
              <th scope="col"
                class="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Rol
              </th>
              <th scope="col"
                class="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <div class="inline-block">
                  <div class="filter-asc"
                    style="width: 0px; height: 0px; border-left: 5px solid transparent; border-right: 5px solid transparent; margin-bottom: 1px; border-bottom: 5px solid rgb(204, 204, 204);">
                  </div>
                  <div class="filter-desc"
                    style="width: 0px; height: 0px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid rgb(204, 204, 204); margin-top: 1px;">
                  </div>
                </div>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-100 hover:cursor-pointer">
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <div class="flex items-center" classes="[object Object]">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img src="https://faces.design/faces/m/m11.png" alt="" class="w-full h-full rounded-full" />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">Héctor Avila</p>
                  </div>
                </div>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <span>hector@kbis.com.mx</span>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <ul classes="[object Object]">
                  <li><a href="#">Administrador</a></li>
                </ul>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <span
                  class="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-red-200 text-red-900"
                  classes="[object Object]">
                  Inactivo
                </span>
              </td>
            </tr>
            <tr class="hover:bg-gray-100 hover:cursor-pointer">
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <div class="flex items-center" classes="[object Object]">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img src="https://faces.design/faces/m/m1.png" alt="" class="w-full h-full rounded-full" />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      Isidro Martínez
                    </p>
                  </div>
                </div>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <span>isidro.ram.mar@gmail.com</span>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <ul classes="[object Object]">
                  <li><a href="#">Administrador</a></li>
                </ul>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <span
                  class="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-green-200 text-green-900"
                  classes="[object Object]">
                  Activo
                </span>
              </td>
            </tr>
            <tr class="hover:bg-gray-100 hover:cursor-pointer">
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <div class="flex items-center" classes="[object Object]">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img src="https://faces.design/faces/m/m22.png" alt="" class="w-full h-full rounded-full" />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">Esteban</p>
                  </div>
                </div>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <span>esteban@kbis.com.mx</span>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <ul classes="[object Object]">
                  <li><a href="#">Auxiliar</a></li>
                </ul>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <span
                  class="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-green-200 text-green-900"
                  classes="[object Object]">
                  Activo
                </span>
              </td>
            </tr>
            <tr class="hover:bg-gray-100 hover:cursor-pointer">
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <div class="flex items-center" classes="[object Object]">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img src="https://faces.design/faces/w/w12.png" alt="" class="w-full h-full rounded-full" />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">Sara</p>
                  </div>
                </div>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <span>sara@kbis.com.mx</span>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <ul classes="[object Object]">
                  <li><a href="#">Administrador</a></li>
                </ul>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <span
                  class="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-red-200 text-red-900"
                  classes="[object Object]">
                  Inactivo
                </span>
              </td>
            </tr>
            <tr class="hover:bg-gray-100 hover:cursor-pointer">
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <div class="flex items-center" classes="[object Object]">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img src="https://faces.design/faces/m/m21.png" alt="" class="w-full h-full rounded-full" />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">Juan</p>
                  </div>
                </div>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <span>juan@kbis.com.mx</span>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <ul classes="[object Object]">
                  <li><a href="#">Auxiliar</a></li>
                </ul>
              </td>
              <td class="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <span
                  class="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-green-200 text-green-900"
                  classes="[object Object]">
                  Activo
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</body>














      </div>
    )
  }
}

/* 
import { Hotel } from "../models/Hotels";

export function calculateTotalCost(
  userType: "regular" | "rewards",
  startDate: Date,
  endDate: Date
): void {
  let resultByHotels: any = {};

  hotels.forEach((hotel: Hotel) => {
    let totalCost = 0;
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const isWeekend =
        currentDate.getDay() === 0 || currentDate.getDay() === 6; // 0: Domingo, 6: Sábado

      const rate = isWeekend
        ? hotel.weekendRates[userType]
        : hotel.weekdayRates[userType];

      totalCost += rate;

      currentDate.setDate(currentDate.getDate() + 1); // Avanzar al siguiente día
    }

    resultByHotels[hotel.name] = totalCost;
  });

  return resultByHotels;
}
 */

/* export const calculateTotalCost = (
  userType: "regular" | "rewards",
  startDate: Date,
  endDate: Date
): void => {}; */

import { hotels } from "../data/hotels";
import { Hotel } from "../models/Hotels";

/**
 * @api {GET} /hotels Obtiene la lista de hoteles
 * @apiName GetHotels
 * @apiGroup Hotels
 *
 * @apiDescription Esta API simula un llamado a una API real para obtener la lista de hoteles.
 * Debido a que es una simulación, se agrega un retraso de 1 segundo antes de devolver la respuesta.
 *
 * @apiSuccess {Object[]} hotels Lista de hoteles.
 * @apiSuccess {number} hotels.id ID del hotel.
 * @apiSuccess {string} hotels.name Nombre del hotel.
 * @apiSuccess {number} hotels.rating Rating del hotel.
 * @apiSuccess {Object} hotels.weekdayRates Tarifas del hotel para días de semana.
 * @apiSuccess {number} hotels.weekdayRates.regular Tarifa regular para días de semana.
 * @apiSuccess {number} hotels.weekdayRates.rewards Tarifa para clientes con membresía de lealtad para días de semana.
 * @apiSuccess {Object} hotels.weekendRates Tarifas del hotel para fines de semana.
 * @apiSuccess {number} hotels.weekendRates.regular Tarifa regular para fines de semana.
 * @apiSuccess {number} hotels.weekendRates.rewards Tarifa para clientes con membresía de lealtad para fines de semana.
 *
 * @apiExample {curl} Ejemplo de uso:
 *    curl -X GET https://api.example.com/hotels
 *
 * @apiSuccessExample Respuesta exitosa:
 *    HTTP/1.1 200 OK
 *    [
 *      {
 *        "id": 1,
 *        "name": "Lakewood",
 *        "rating": 3,
 *        "weekdayRates": { "regular": 110, "rewards": 80 },
 *        "weekendRates": { "regular": 90, "rewards": 80 }
 *      },
 *      // ... más hoteles ...
 *    ]
 */

export const getHotels = (): Promise<Hotel[]> => {
  return new Promise<Hotel[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(hotels);
    }, 1000);
  });
};

/**
 * @api {GET} /hotels/:id Obtiene un hotel por ID
 * @apiName GetHotelByID
 * @apiGroup Hotels
 *
 * @apiDescription Esta API simula un llamado a una API real para obtener un hotel por su ID.
 * Debido a que es una simulación, se agrega un retraso de 1 segundo antes de devolver la respuesta.
 *
 * @apiParam {number} id ID del hotel a obtener.
 *
 * @apiSuccess {number} id ID del hotel.
 * @apiSuccess {string} name Nombre del hotel.
 * @apiSuccess {number} rating Rating del hotel.
 * @apiSuccess {Object} weekdayRates Tarifas del hotel para días de semana.
 * @apiSuccess {number} weekdayRates.regular Tarifa regular para días de semana.
 * @apiSuccess {number} weekdayRates.rewards Tarifa para clientes con membresía de lealtad para días de semana.
 * @apiSuccess {Object} weekendRates Tarifas del hotel para fines de semana.
 * @apiSuccess {number} weekendRates.regular Tarifa regular para fines de semana.
 * @apiSuccess {number} weekendRates.rewards Tarifa para clientes con membresía de lealtad para fines de semana.
 *
 * @apiExample {curl} Ejemplo de uso:
 *    curl -X GET https://api.example.com/hotels/1
 *
 * @apiSuccessExample Respuesta exitosa:
 *    HTTP/1.1 200 OK
 *    {
 *      "id": 1,
 *      "name": "Lakewood",
 *      "rating": 3,
 *      "weekdayRates": { "regular": 110, "rewards": 80 },
 *      "weekendRates": { "regular": 90, "rewards": 80 }
 *    }
 *
 * @apiErrorExample Error 404:
 *    HTTP/1.1 404 Not Found
 *    {
 *      "code": 404,
 *      "message": "Hotel not found"
 *    }
 */

export const getHotelByID = (id: number): Promise<Hotel> => {
  return new Promise<Hotel>((resolve, reject) => {
    setTimeout(() => {
      try {
        let result = hotels.filter((hotel: Hotel) => hotel.id === id)[0];
        if (!result) throw "not found";
        resolve(result);
      } catch (error) {
        reject({
          code: 404,
          message: "Hotel not found",
        });
      }
    }, 1000);
  });
};

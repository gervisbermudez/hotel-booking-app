import { hotels } from "../data/hotels";
import { reviews } from "../data/reviews";
import { Hotel } from "../models/Hotels";
import { Review } from "../models/Review";

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

/**
 * @api {GET} /reviews Obtiene la lista de reseñas
 * @apiName GetReviews
 * @apiGroup Reviews
 *
 * @apiDescription Esta API simula un llamado a una API real para obtener la lista de reseñas.
 * Debido a que es una simulación, se agrega un retraso de 1 segundo antes de devolver la respuesta.
 *
 * @apiSuccess {Object[]} reviews Lista de reseñas.
 * @apiSuccess {number} reviews.id ID de la reseña.
 * @apiSuccess {number} reviews.rating Rating de la reseña.
 * @apiSuccess {string} reviews.comment Comentario de la reseña.
 * @apiSuccess {string} reviews.user Nombre y apellido del usuario que realizó la reseña.
 * @apiSuccess {string} reviews.date Fecha de la reseña.
 *
 * @apiExample {curl} Ejemplo de uso:
 *    curl -X GET https://api.example.com/reviews
 *
 * @apiSuccessExample Respuesta exitosa:
 *    HTTP/1.1 200 OK
 *    [
 *      { "id": 1, "rating": 4, "comment": "¡Excelente servicio!", "user": "John Doe", "date": "2023-05-15" },
 *      // ... más reseñas ...
 *    ]
 */

export const getReviews = (): Promise<Review[]> => {
  return new Promise<Review[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(reviews);
    }, 1000);
  });
};

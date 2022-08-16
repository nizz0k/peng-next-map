import conn from '../../../lib/db'

export default async function handler(req, res) { 
try{
const query = `SELECT json_build_object(
	'type', 'FeatureCollection',
	'features', jsonb_agg(feature)
)
FROM (
SELECT json_build_object(
'type', 'Feature',
	'geometry', ST_AsGeoJSON(geom)::JSONB,
	'properties', to_jsonb(inputs) - 'geometry'
) AS feature
FROM (
SELECT *
FROM public."Peng" AS p
JOIN public."Address_Info" AS i
ON p.id = i.id
) AS inputs
) AS features;`
const result = await conn.query(
query)
res.json(result.rows[0].json_build_object)
} 
catch (error){
	console.log(error);
	return(
		res.status(500).json({
			message: 'Error',
		})
	)
}
}

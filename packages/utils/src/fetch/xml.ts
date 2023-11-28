import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import { Recordable } from '../global';

export function parseXml<T>(xml: string) {
  const parser = new XMLParser();
  const parseData = parser.parse(xml);
  return parseData as T;
}
export function buildXml(json: Recordable) {
  const builder = new XMLBuilder({});
  const xmlContent = builder.build(json);
  return xmlContent;
}
